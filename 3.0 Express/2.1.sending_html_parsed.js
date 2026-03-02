// serving static files: (use of middleware)

const express = require("express");
const app = express();
const path = require("path");

// Serve static files from /public
// middleware
app.use(express.static(path.join(__dirname, 'public')));

// Root route: send a file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "file.html"));
});

app.get("/about", (req, res) => {
    res.send("About me page!");
});

app.get("/contact", (req, res) => {
    res.send("Contact me at +812121212!");
});

app.listen(3000, () => {
    console.log("server is listening: http://localhost:3000");
});
