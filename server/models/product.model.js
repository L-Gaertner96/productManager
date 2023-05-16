const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    productName: {
        type:String, 
        required: true,
        minlength: { value: 2, message: 'Product name must be at least 2 characters long.' }},
    productPrice: {
        type:Number, 
        required: true},
    productDescription : {
        type:String, 
        required: true,
        minlength: { value: 10, message: 'Product Description must be at least 10 characters long.' }}
}, {timestamps:true});


module.exports = mongoose.model('Product', ProductSchema);