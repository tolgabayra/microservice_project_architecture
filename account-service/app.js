const express = require("express");
const app = express();
const dotnev = require("dotenv");

dotnev.config();


app.listen(8000, () => {
  console.log("Account Service Is Running on PORT:");
})




