var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Moxie = require('../models/Moxie.js');

/* GET /moxies listing. */
router.get('/', function(req, res, next) {
    Moxie.find(function (err, moxies) {
        if (err) return next(err);
        res.json(moxies);
    });
});

/* POST /moxies */
router.post('/', function(req, res, next) {
    Moxie.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /moxies/id */
router.get('/:id', function(req, res, next) {
    Moxie.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /moxies/:id */
router.put('/:id', function(req, res, next) {
    Moxie.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /moxies/:id */
router.delete('/:id', function(req, res, next) {
    Moxie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
