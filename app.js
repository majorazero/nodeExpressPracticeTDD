let express = require("express");
let app = express();

app.use(express.static('public')); //mounts middleware

let cities = require("./routes/cities");
app.use("/cities",cities);
module.exports = app; //wrote it like this so our test.js can access it as a module
