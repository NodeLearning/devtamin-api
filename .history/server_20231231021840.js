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



mongoose.connect(
  "mongodb+srv://MagiSena:Niranjan%4046432@cluster0.p7ynm.mongodb.net/DEVTAMIN?retryWrites=true&w=majority"
).then(()=> {
    app.listen(3000, () => {
      console.log("Node API is running on port 3000");
    });
    console.log("connected to MongoDB");
}).catch((error)=> {
    console.log(error);
});