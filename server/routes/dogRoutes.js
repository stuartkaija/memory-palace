const express = require("express");
const router = express.Router();
const uniqid = require('uniqid');

router.get('/', (req, res) => {
    console.log(req.body)
});

module.exports = router;