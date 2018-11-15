const path = require("path");
const express = require("express");
let organRoutes = require("../router/organ");
const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));
server.use("/api", organRoutes);
module.exports = server;
