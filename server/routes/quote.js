const express = require('express');
const router = express.Router();
const { securityUtil, quoteUtil } = require('../utils');

router.post('/save', (req, res) => {

    let quoteData = req.body;
    quoteData.firmName = "CPSDev"; //This will later be extracted from JWT token

    if (!quoteData)
        res.status(400).send({ message: "Invalid Input" });

    console.log(quoteData);
    quoteUtil.savequote(quoteData)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            return res.status(400).send({ message: "quote not saved" });
        })
})


router.post('/getAll', (req, res) => {

    let firmName = req.body.firmName;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    quoteUtil.getAllquotes(firmName)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch quotes of " + firmName });
        })
})

router.post('/getid', (req, res) => {

    let firmName = req.body.firmName;
    let query = req.body.query;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    quoteUtil.getquotesByQuery(firmName, query)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch quotes of " + firmName });
        })
})

router.post('/update', (req, res) => {

    let quoteData = req.body;
    if (!quoteData)
        res.status(400).send({ message: "Invalid Input" });

    quoteUtil.updatequote(quoteData)
        .then(result => {

            return res.status(200).send({ message: "quote Updated" })
        })
        .catch(err => {
            return res.status(400).send({ message: "Failed to update quote Details" });
        })
})


module.exports = router;