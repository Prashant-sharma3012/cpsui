const express = require('express');
const router = express.Router();
const { securityUtil, itemUtil } = require('../utils');

router.post('/save', (req, res) => {

    let itemData = req.body;
    itemData.firmName = "CPSDev"; //This will later be extracted from JWT token

    if (!itemData)
        res.status(400).send({ message: "Invalid Input" });

    console.log(itemData);
    itemUtil.saveItem(itemData)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            return res.status(400).send({ message: "Item not saved" });
        })
})


router.post('/getAll', (req, res) => {

    let firmName = req.body.firmName;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    itemUtil.getAllItems(firmName)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch Items of " + firmName });
        })
})

router.post('/getid', (req, res) => {

    let firmName = req.body.firmName;
    let query = req.body.query;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    itemUtil.getItemsByQuery(firmName, query)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch Items of " + firmName });
        })
})

router.post('/update', (req, res) => {

    let itemData = req.body;
    if (!itemData)
        res.status(400).send({ message: "Invalid Input" });

    itemUtil.updateItem(itemData)
        .then(result => {

            return res.status(200).send({ message: "Item Updated" })
        })
        .catch(err => {
            return res.status(400).send({ message: "Failed to update item Details" });
        })
})


module.exports = router;