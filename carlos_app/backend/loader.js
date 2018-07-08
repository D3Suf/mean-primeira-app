const PORT = 3003;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

/** Express is a Chain of responsability work with middlewares, middlware by middlware */
// first we say all requests have urlencode and json parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("work");
});

app.listen(PORT, function() {
  console.log("API is running on port " + PORT);
});
