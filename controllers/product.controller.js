const productModel = require('../models/product.model');

exports.allProducts = (request, response) => {
    productModel.find({}, (err, doc) => {
        if (err) {
            response.send({status: false, message: err.message});
            return;
        }
        if (doc){
            response.send(doc);
        }
    });
}

exports.getProductById= (request,response) => {

    var pid=request.params.id;

    productModel.findOne({product_id:pid},(err,doc) => {
        if(err){
            response.send(err.message);
        } else {
        response.send(doc);
        }
    });
}

