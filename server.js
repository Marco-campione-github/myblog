const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// Handling '/' request using the file index.html in the public folder
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Handling '/about' request
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// Handling '/news' request
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/news.html");
});

// Server setup
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
