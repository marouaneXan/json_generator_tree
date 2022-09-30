const express = require("express");
const dotenv = require("dotenv").config();
const cors=require('cors')
const PORT = process.env.PORT || 5000;
const app = express();

//Mongoodb connection
const connectDB=require('./config/db')
connectDB()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api/v1/auth',require('./routes/authRoute'))

//Cors
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server connecting ${PORT}`);
});
