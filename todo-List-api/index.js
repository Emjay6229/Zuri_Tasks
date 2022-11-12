const express = require("express");
const { json } = require("express");
const controller = require("./src/controllers/listController");
const models = require("./src/models/ToDoList");
const routes = require("./src/routes/listRoutes");
const connect = require("./config/database")
const PORT = process.env.PORT || 9000;

const app = express();

app.use(json());

app.use("/", routes);

connect();

const server = app.get("/", (req, res) => {
 console.log("Add To-Do items here...");
})

server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}....`);
})
