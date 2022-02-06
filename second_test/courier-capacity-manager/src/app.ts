import express from "express";

export const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("Dockerize the node app");
});

app.listen(port, () => {
  console.log(`Now listenning on port ${port}`);
});
