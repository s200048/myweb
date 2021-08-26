const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server is now running on port 3000.")
});