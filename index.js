import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hi hellow</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>this is about me page</h1>");
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
