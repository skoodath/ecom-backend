const productModel = require('../models/product.model');

exports.addProduct = (request, response) => {
    const product = request.body;
    const newProduct = new productModel(product);
    
    newProduct.save((err, doc)=>{
        if(err){
            response.send({status: false, message: err.message});
            return;
        } 
        if(doc._id) {
            response.send({status: true,message: "Product added successfully"});
        }
    });
}

exports.updateProduct= (request,response) => {
    var pid=request.params.id;
    var updatedProduct=request.body;

    productModel.updateOne({product_id:pid},updatedProduct,(err,res) => {
        if(err){
            response.send(err.message);
        }
        if(res){
            response.send(res);
        }
    });
}

exports.deleteProduct= (request,response) => {
    var pid=request.params.id;
    var deletedProduct=request.body;

    productModel.deleteOne({product_id:pid},deletedProduct,(err,res) => {
        if(err){
            response.send(err.message);
        }
        if(res){
            response.send(res);
        }
    });
}