const express = require("express");
const app = express()
const dotnev = require("dotenv")
const port = process.env.APP_PORT || 4000


dotnev.config()


app.listen(4000, () => {
  console.log("Customer Service Is Running On Port:");
})
