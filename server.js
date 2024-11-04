const express = require("express");
const app = express();
const port = 3001;
const statementData = require("./statement-data");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("statement", statementData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
