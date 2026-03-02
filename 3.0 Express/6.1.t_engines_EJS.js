const express = require("express");
const app = express();
const path = require("path");

// npm install ejs --save

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// views/index.ejs

app.get("/", (req, res) => {
  res.render("index", {
    title: "EJS Demo Page",
    siteName: "Demo Website",

    article: {
      title: "Building Pages with EJS",
      author: "Demo Author",
      dateISO: "2026-01-16",
      dateHuman: "January 16, 2026",
      features: [
        "Simple syntax",
        "Embedded JavaScript",
        "Works great with Express"
      ]
    }
  });
});

app.listen(5000, function () {
  console.log("visit http://localhost:5000/");
});
