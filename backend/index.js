const express = require('express');

const UserRouter = require("./routers/userRouter")
const FormRouter = require("./routers/formRouter")
 const cors = require('cors');
 const port = 5000;


 const app = express();
 app.use(express.json());

 app.use(cors({
    origin:["http://localhost:5173"]
 }));

 app.use("/user", UserRouter);
 app.use("/form",FormRouter)
//  app.use("/topics", toipcRouter)
//  app.use("/questions", questionRouter)
//  app.use("/solutions", solutionRouter)

//  const userRouter = require("./routers/userRouter")
//  const toipcRouter = require("./routers/questionRouter")
//  const questionRouter = require("./routers/topicRouter")
//  const solutionRouter = require("./routers/solutionRouter")





 app.listen(port, () => { console.log("server started");});