const PORT = 3003;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();

/** Express is a Chain of responsability work with middlewares, middlware by middlware */
// first we say all requests have urlencode and json parse
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(PORT, function() {
  console.log("API is running on port " + PORT);
});

module.exports = server;