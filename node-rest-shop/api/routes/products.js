const express = require('express');
const router = express.Router();

const Product = require('../Models/product');
const mongoose = require('mongoose');



router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.findById()
    .exec()
    .then()
    .catch()});
router.patch('/:productID', (req, res, next) => {
   res.status(200).json({
        message: 'Updated product'
   });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
         message: 'Deleted product'
    });
 });


module.exports = router;