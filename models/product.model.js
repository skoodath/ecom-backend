const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: {
        type: Number,
        required:true,
        unique:true,
        index:true
    },
    product_brand: {
        type:String,
        required:true,
        index:true
    },
    product_model: {
        type: String,
        required: true,
        index: true
    },
    product_price: {
        type:Number,
        required:true,
        index:true,
    },
    product_discount: {
        type:Number,
        required: true
    },
    product_title:{
        type: String,
        required: true
    },
    product_image:{
         type:String,
         required:true,
    },
    product_offers:{
          type:Array,
          required:true
    },
    product_specifications: {
        type:Array, 
        required:true
    },
    product_category:{
        type:String,
        required:true
    },
    product_sub_category:{
         type:String,
         required:true
    },
    product_seller:{
        type:String,
        require:true
    },
    product_reviews:{
        type:Array,
        default:null
    }
});

module.exports = mongoose.model('product', productSchema);