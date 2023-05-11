const Product = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err=> res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while retrieving the products.' });
        });
};

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}