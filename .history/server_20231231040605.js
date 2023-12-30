const express = require('express');

const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();


const port = 3000;

// use middleware to handle json
app.use(express.json());
// middleware to handle form-data
app.use(express.urlencoded({extended: false}))

// ----define routes---

app.get('/', (req, res)=> {
    res.send("Hello node api!!")
})

app.get("/blog", (req, res)=> {
    res.send("Hello Bloggers!!")
})

app.get("/product", async(req,res)=> {
    try {
        const products = await Product.find({}); // request all data
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.get("/product/:id", async(req,res)=> {
    try {
        const {id} = req.params ;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

app.post('/product', async(req,res)=> {
    try {
        const product  = await  Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//update product
app.put("/product/:id", async(req,res)=> {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); // here return the product before updating
        // we can not find the product
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// delete product
app.delete("/product/:id", async(req,res)=> {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
} )

// define database connection
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://MagiSena:Niranjan%4046432@cluster0.p7ynm.mongodb.net/DEVTAMIN?retryWrites=true&w=majority"
).then(()=> {
    // to connect database before connecting to the server
    app.listen(3000, () => {
      console.log("Node API is running on port 3000");
    });
    // below code run 1st before connecting to the server
    console.log("connected to MongoDB");
}).catch((error)=> {
    console.log(error);
});