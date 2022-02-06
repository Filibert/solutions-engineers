import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import connect from "./connect";
export const app = express()

const port = 3000;

app.use(bodyParser.json());
app.listen(port, () => {console.log(`Now listenning on port ${port}`)});

if(process.env.DB_URI) {
  connect({uri: process.env.DB_URI, user: process.env.temp_passwd, pass: process.env.temp_passwd})
} else {
  console.error("Can not find db URI")
}
