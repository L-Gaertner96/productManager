const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: {type:String, required: true},
    productPrice: {type:Number, required: true},
    productDescription : {type:String, required: true}
}, {timestamps:true});
module.exports = mongoose.model('Product', ProductSchema);