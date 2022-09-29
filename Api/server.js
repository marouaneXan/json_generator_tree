const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

//Mongoodb connection
const connectDB=require('./config/db')
connectDB()


app.listen(PORT, () => {
  console.log(`Server connecting ${PORT}`);
});
