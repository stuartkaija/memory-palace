const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const uniqid = require('uniqid');

router.post('/', (req, res) => {

    const { breed, difficulty } = req.body

    // somewhere in here, validation to ensure breed input by user is in dog api, and there are sufficient number of images to populate selected difficulty

    axios
        .get(`https://dog.ceo/api/breed/${breed}/images/random/${difficulty}`)
        .then((response) => {
            res.json(response.data)
        })
        .catch((error) => {
            console.log('there was an error')
            res.error(error);
        })
});

module.exports = router;