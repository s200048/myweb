const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const Contact = require("./models/contact");

//middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


//connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/exampleDB")
  .then(() => {
    console.log("Successfully connnecting to mongoDB.");
  })
  .catch((e) => {
    console.log("Fail connect to mongodb.");
    console.log(e);
  });


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
  // console.log(req.body);
  let {firstname, lastname, email, tel, address, designreq} = req.body;
  let newContact = new Contact(req.body);
  newContact.save().then(() =>{
    console.log("Saved data.");
    res.render("contactViews/formhandler");
  }).catch((e) => {
    console.log(e);
  })
});

app.listen(3000, () => {
  console.log("Server is now running on port 3000.");
});
