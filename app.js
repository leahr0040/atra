//const createError = require('http-errors');
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose"); 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose
  .connect(process.env.DB_CONNECT, options)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error:", err);
  });



const router = require("./router");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`hello I'm lisening to ${port}`);
});

module.exports = app;  
