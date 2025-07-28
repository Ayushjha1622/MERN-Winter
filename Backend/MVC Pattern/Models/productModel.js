const {Schema, model, Schema} = require('mongoose')

const Schema = new Schema({
    name: {
        type: String, 
        required: true, 
       
    },
    price: {
        type: String, 
        required: true, 
       
    },
    description: {
        type: String, 
        required: true, 
       
    },
    category: {
        type: String, 
        required: true, 
       
    },
    createdAt: {
        type: Date,
        default: Date.now

    },

})

const ProductModel = model("product", ProductSchema)

module.exports = ProductMode