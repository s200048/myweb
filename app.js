const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

//middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Homepage
app.get("/", (req, res) => {
  res.render("index");
});

// About Page
app.get("/about", (req, res) => {
  res.render("aboutViews/about");
});

// Case Page
app.get("/case", (req, res) => {
  res.render("caseViews/case");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.render("contactViews/contact");
});

app.post("/contact/formhandler", (req, res) => {
  console.log(req.body);
  res.render("contactViews/formhandler");
});

app.listen(3000, () => {
  console.log("Server is now running on port 3000.");
});
