const express = require('express');
 const app = express();
 const cors = require('cors');
 const port = 5000;

 app.use(express.json());

 app.use(cors({
    origin:["http://localhost:5173"]
 }));

 app.use("/users", userRouter)
 app.use("/topics", toipcRouter)
 app.use("/questions", questionRouter)
 app.use("/solutions", solutionRouter)

 const userRouter = require("./routers/userRouter")
 const toipcRouter = require("./routers/questionRouter")
 const questionRouter = require("./routers/topicRouter")
 const solutionRouter = require("./routers/solutionRouter")





 app.listen(port, () => { console.log("server started");});