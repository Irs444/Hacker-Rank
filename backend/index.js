const express = require('express');

const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp")

const UserRouter = require("./routers/userRouter")
const FormRouter = require("./routers/formRouter")
const SolutionRouter = require("./routers/solutionRouter")
 const cors = require('cors');
 const port = 5000;


 const app = express();

 app.use(express.urlencoded({extended: true}))
 app.use(express.json());

 app.use(cors({
    origin:["http://localhost:5173"]
 }));

 app.use("/user", UserRouter);
 app.use("/form",FormRouter);
 app.use("/solutions",SolutionRouter);


 // code compiler 

 app.post("/run",async (req, res) => {
const {language = "cpp", code} = req.body;

if (code === undefined) {
   return res.status(400).json({success: false, error:"Empty code body"})
}
 try {
   // need to generate a c++ file with content from the request
   const filepath = await generateFile(language, code)

   // we need to run the file and responce
   const  output = await executeCpp(filepath, output);

    return req.json({filepath})
   } catch (err) {
      res.status(500).json({err})
   }
 }),




 app.listen(port, () => { console.log("server started");});