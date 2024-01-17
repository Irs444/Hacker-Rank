const express = require('express');

const { generateFile } = require("./generateFile");
// const { executeCpp } = require("./executeCpp")
const { addJobToQueue } = require("./jobQueue");

const UserRouter = require("./routers/userRouter")
const FormRouter = require("./routers/formRouter")
const SolutionRouter = require("./routers/solutionRouter")
const AddSolutionRouter = require("./routers/addsolutionRouter")
const Job = require("./models/job");


const cors = require('cors');
const port = 5000;


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/form", FormRouter);
app.use("/solutions", SolutionRouter);
app.use("/addsolution", AddSolutionRouter);


// code compiler 

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  console.log(code);

  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body" })
  }

  // need to generate a c++ file with content from the request
  const filepath = await generateFile(language, code);
  // write into DB
  const job = await new Job({ language, filepath }).save();
  const jobId = job["_id"];
  addJobToQueue(jobId);
  res.status(201).json({ jobId });
});

app.get("/status", async (req, res) => {
  const jobId = req.query.id;


  if (jobId === undefined) {
    return res
      .status(400)
      .json({ success: false, error: "missing id query param" });
  }

  const job = await Job.findById(jobId);


  if (job === undefined) {
    return res.status(400).json({ success: false, error: "couldn't find job" });
  }

  return res.status(200).json({ success: true, job });
});





app.listen(port, () => { console.log("server started"); });