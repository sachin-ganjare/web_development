// express js router module

const express = require("express");
const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.log("Router-level middleware");
  next();
});

router.get("/users", (req, res) => res.send("Users"));


// using router middleware
app.use("/api", router);

app.listen(3000);