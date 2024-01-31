const express = require("express");
const app = express();
const mongoose = require("mongoose");

const morgan=require('morgan')

const cors= require('cors')
app.use(cors())
app.use(cors({
  origin: 'http://localhost:3000' // Allow only requests from this origin
 }));

 const getUserRoute=require("./routes/userRoute")


 
 const url = "mongodb://127.0.0.1:27017/test";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'))

app.use('/get',getUserRoute)
 
//connection to data base
async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}

connectDB();
app.listen(4000,()=>{
    console.log("server is running")
 })