const path = require("path");
const express = require("express");
let organRoutes = require("./routes/organs");
const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));
server.use("/api", routes);
module.exports = server;
