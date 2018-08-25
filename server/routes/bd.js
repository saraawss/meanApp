var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var rate = require('../models/Rate.js');



/* GET SINGLE Bd BY ID */
router.get('/:rateid', function(req, res, next) {
  Bd.find({'rateid':req.params.rateid}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE Bd */
router.post('/:rateid', function(req, res, next) {
	rate.findById(req.params.rateid, function (err, rate) {
	    if (err) return next(err);
		rate.Bd = req.body;
		rate.unitcost = req.body.total;
		rate.save();

	    res.json(rate);
	  });
});


module.exports = router;