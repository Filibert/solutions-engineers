import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import connect from "./connect";
import CourrierRouter from "./routes/couriers";
export const app = express()

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', CourrierRouter);

app.use('/couriers', CourrierRouter);
app.listen(port, () => {console.log(`Now listenning on port ${port}`)});

if(process.env.DB_URI) {
  connect({uri: process.env.DB_URI})
} else {
  console.error("Can not find db URI")
}
