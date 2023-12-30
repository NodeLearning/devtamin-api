const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

// define routes
app.get('/', (req, res)=> {
    res.send("Hello node api!!")
})

app.get("/blog", (req, res)=> {
    res.send("Hello Bloggers!!")
})

app.listen(3000, ()=> {
    console.log("Node API is running on port 3000");

})

mongoose.connect(
  "mongodb+srv://MagiSena:Niranjan/@46432@cluster0.p7ynm.mongodb.net/DEVTAMIN?retryWrites=true&w=majority"
).then;