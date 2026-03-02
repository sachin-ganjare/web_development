// express server returning an html file from existing folder:

const express = require("express");
const app = express();

const path = require("path");


// sending a file
app.get("/", (req, res, next) => {
	const root = path.join(__dirname, 'public');
	res.sendFile("file.html", {root});
})


app.get("/about", (req, res) => {
	res.send("About me page:!");
})

app.get("/contact", (req, res) => {
	res.send("Contact me at +812121212:!");
})


app.listen(3000, () => {
	console.log("server is listening: http://localhost:3000");
});
