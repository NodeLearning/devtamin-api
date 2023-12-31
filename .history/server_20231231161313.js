require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const productRoute = require("./routes/productRoute");

const errorMiddleware = require('./middleware/errorMiddleware');

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

var corsOptions = {
  origin: "http://localhost:",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//------------------Middlewares-----------
// handle cors
app.use(cors());
// use middleware to handle json
app.use(express.json());
// middleware to handle form-data
app.use(express.urlencoded({ extended: false }));

// ---------------------define routes---

// ---------use middleware to handle product routes
app.use("/api/product", productRoute);

//------------------------
app.get("/", (req, res) => {
  //throw new Error('fake error');
 res.send("Hello node api!!");
});

app.get("/blog", (req, res) => {
  res.send("Hello Bloggers!!");
});

app.use(errorMiddleware); // error middlewares must be located below the routs, otherwise it can not capture errors

//-------------------define database connection
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    // to connect database before connecting to the server
    app.listen(PORT, () => {
      console.log(`Node API is running on port ${PORT}`);
    });
    // below code run 1st before connecting to the server
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
