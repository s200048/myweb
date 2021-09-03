const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req,res) => {
    res.render("index");
});

// About Page
app.get("/about", (req,res) => {
    res.render("aboutViews/about");
})

// Case Page
app.get("/case", (req,res) => {
    res.render("caseViews/case");
})

// Contact Page
app.get("/contact", (req,res) => {
    res.render("contactViews/contact");
})

// app.post("/contact", (req,res)=> {
//     res.render("contactViews/contact");
// })

app.listen(3000, () => {
    console.log("Server is now running on port 3000.")
});