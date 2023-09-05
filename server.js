const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.set('view engine', 'ejs');

// configraration with env.
dotenv.config();
const port = process.env.PORT || 3000;

// json parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define routes
app.use("/", require("./routes/get"));
app.use("/post", require("./routes/post"));

app.listen(port, () => {
    console.log("Connected");
});