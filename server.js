const express = require("express");
const path = require("path");
const fs = require("fs");
const variables = require(path.join(__dirname, "public", "variables.json"));

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Handling '/' request using the file index.ejs in the public folder
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "public", "index.ejs"), { variables });
});

// Handling '/about' request
app.get("/about", (req, res) => {
  res.render(path.join(__dirname, "public", "about.ejs"), { variables });
});

// Handling '/news' request
app.get("/news", (req, res) => {
  res.render(path.join(__dirname, "public", "news.ejs"), { variables });
});

// Handling '/projects' request
app.get("/projects", (req, res) => {
  res.render(path.join(__dirname, "public/", "projects.ejs"), { variables });
});

// Handling '/education' request
app.get("/education", (req, res) => {
  res.render(path.join(__dirname, "public/", "education.ejs"), { variables });
});

// Server setup
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
