const express = require("express");
const app = express()
const dotnev = require("dotenv")

dotnev.config()


app.listen(4000, () => {
  console.log("Customer Service Is Running On Port:");
})
