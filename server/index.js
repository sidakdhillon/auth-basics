// Main starting point of the application
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const router = require("./router");

// App Setup
const app = express();
app.use(morgan("combined"));
app.use(express.json());
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Listening to incoming requests on port: ${port}`);
