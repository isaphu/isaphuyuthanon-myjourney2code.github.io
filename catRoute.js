const express = require('express'); //import express module
const router = express.Router(); //create express app

router.post('/eat', function (req, res) {
    res.send('cat eat');
});

router.post('/sleep', function (req, res) {
    res.send('cat sleep');
});

module.exports = router;