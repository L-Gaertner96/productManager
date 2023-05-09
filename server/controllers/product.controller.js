const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    Product.find()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while retrieving the products.' });
        });
};
