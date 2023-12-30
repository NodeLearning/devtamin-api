const mongoose = require('mongoose');

const productSchema = mongoose.Schema(  // define database schema
    {
        // define fields
        name: {
            type: String,
            required: [true,"Please enter a product name"] // validation parameters
        },
        quantity: {
            type:Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String
        }
    }
)