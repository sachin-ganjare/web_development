// sending if error - using middleware:

const express = require("express");
const app = express();
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error!");
});

app.listen(3000, () => {
  console.log("server is listening: http://localhost:3000");
});