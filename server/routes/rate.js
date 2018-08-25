var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Rate = require('../models/Rate.js');

/* GET ALL Rates */
router.get('/', function(req, res, next) {
  Rate.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Rate BY ID */
router.get('/:id', function(req, res, next) {
  Rate.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Rate */
router.post('/', function(req, res, next) {
  Rate.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Rate */
router.put('/:id', function(req, res, next) {
  Rate.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Rate */
router.delete('/:id', function(req, res, next) {
  Rate.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;