import express from "express";

export const app = express()

const port = 3000;

app.listen(port, () => {console.log(`Now listenning on port ${port}`)});
