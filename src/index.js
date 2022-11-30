const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Test route");
});

app.get("/show/:text", (req, res) => {
  const { text } = req.params;

  res.send(`You entered ${text}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
