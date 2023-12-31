require('dotenv').config()

const express = require('express');

const mongoose = require("mongoose");

const productRoute = require('')

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// use middleware to handle json
app.use(express.json());
// middleware to handle form-data
app.use(express.urlencoded({extended: false}))

// ----define routes---



// define database connection
mongoose.set("strictQuery", false);

mongoose.connect(
  MONGO_URL
).then(()=> {
    // to connect database before connecting to the server
    app.listen(PORT, () => {
      console.log(`Node API is running on port ${PORT}`);
    });
    // below code run 1st before connecting to the server
    console.log("connected to MongoDB");
}).catch((error)=> {
    console.log(error);
});