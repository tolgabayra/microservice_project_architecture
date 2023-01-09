const express = require("express")
const app = express()
const amqp = require("amqplib");


app.listen(1234, () => {
  console.log("Notification Service Is Running On Port:");
})