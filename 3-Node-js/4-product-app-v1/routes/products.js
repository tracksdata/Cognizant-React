var express = require('express');
var router = express.Router();


let Product = require('../model/Product');

router
  .get('/', function (req, res, next) {
    // Load all products ( Non - Blocking IO )
    Product.find(function (err, docs) {
      if (err) {
        next(err);
      }
      res.json(docs);
    });
  })
  .get('/:id', function (req, res, next) {
    // Load all products ( Non - Blocking IO )
    Product.find({ _id: req.params.id }, function (err, doc) {
      if (err) {
        next(err);
      }
      if (doc.length === 0) {
        res.status(404).json('requested resource not exist');
      }
      res.json(doc);
    });
  })

  

  .delete('/:id', function (req, res, next) {
    // Load all products ( Non - Blocking IO )
    Product.remove({ _id: req.params.id }, function (err, doc) {
      if (err) {
        next(err);
      }
      res.json({ count: 1 });
    });
  })


  .post('/', function (req, res, next) {
    let productData = req.body;
    let product = new Product(productData);
    product.save(function (err, savedProduct) {
      res.status(201).json(savedProduct)
    });
  })
  .put('/:id', function (req, res, next) {
    let id = req.params.id
    let productData = req.body;

    Product.findByIdAndUpdate({ _id: id }, productData, function (err, savedProduct) {
      res.status(200).json(savedProduct)
    });
    
  })


module.exports = router;
