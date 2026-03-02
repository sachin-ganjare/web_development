// Tokens: Authentication using Middleware

// token + routing + json parsing
const express = require("express");
const app = express();

app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Auth
const auth = (req, res, next) => {
  if (req.headers.token !== "abc123") {
    return res.status(401).send("Invalid Token");
  }
  next();
};

app.get("/secure", auth, (req, res) => {
  res.send("Secure Route Accessed!");
});

// Error Middleware
app.use((err, req, res, next) => {
  console.log("Error Occurred:", err.message);
  res.status(500).send("Server Error");
});

app.listen(3000);