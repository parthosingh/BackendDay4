const express = require("express");
const connection = require("./config/db")

const userRouter = require("./router/user.router");

const server = express();
const PORT = 8080;
server.use(express.json());

server.use("/user", userRouter);



server.listen(PORT, async ()=> {
    try {
        await connection()
        console.log(`server listening`);       
    } catch (error) {
        console.log(`error connecting to the database ${error}`)
    }
})