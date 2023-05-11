const Product = require('../models/product.model');


module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message:"Welcome to the API"
    });
}


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err=> res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while retrieving the products.' });
        });
};