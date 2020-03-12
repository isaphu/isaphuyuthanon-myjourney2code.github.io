const express = require('express'); //import express module
const router = express.Router(); //create express app

router.post('/eat', function (req, res) {
    res.send('dog eat');
});

router.post('/sleep', function (req, res) {
    res.send('dog sleep');
});

module.exports = router;