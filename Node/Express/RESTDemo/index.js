// index.js

const express = require("express");
const app = express();

// const bootstrap = require('bootstrap');
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

// const ejs = require('ejs');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    res.send("POST /tacos response");
})
app.listen(3000, () = {
    console.log("ON PORT 3000!");
})
