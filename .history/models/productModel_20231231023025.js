const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please enter a product name"] // validation parameters
        },
        quantity: {
            ty
        }
    }
)