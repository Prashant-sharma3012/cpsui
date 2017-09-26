const express = require('express');
const router = express.Router();
const { securityUtil, vendorUtil } = require('../utils');



router.post('/save', (req, res) => {

    let vendorData = req.body;
    vendorData.firmName = "CPSDev"; //This will later be extracted from JWT token

    if (!vendorData)
        res.status(400).send({ message: "Invalid Input" });

    console.log(vendorData);
    vendorUtil.savevendor(vendorData)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "vendor not saved" });
        })

})


router.post('/getAll', (req, res) => {

    let firmName = req.body.firmName;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });


    vendorUtil.getAllvendors(firmName)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch vendors of " + firmName });
        })

})


router.post('/update', (req, res) => {

    let vendorData = req.body;
    if (!vendorData)
        res.status(400).send({ message: "Invalid Input" });

    vendorUtil.updatevendor(vendorData)
        .then(result => {

            return res.status(200).send({ message: "vendor Updated" })
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to update vendor Details" });
        })

})


module.exports = router;