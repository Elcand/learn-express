const path = require("path");
const express = require("express");
const app = express();

const tagsData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cats", (req, res) => {
  const cats = ["Milo", "Otis", "Garfield"];
  res.render("cats", { cats });
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.get("/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const data = tagsData[tag];
  if (data) {
    res.render("tag", { data });
  } else {
    res.render("notfound", { tag });
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
