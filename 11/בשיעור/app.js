const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect( process.env.DB_STRING, options)
  .then(() => {
    console.log("I'm connected");
  })
  .catch((err) => {
    console.log("err ", err);
  });


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`hello i'm lisening to ${port}`);
});
module.exports = app;
