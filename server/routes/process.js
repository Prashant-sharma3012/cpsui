const express = require('express');
const router = express.Router();
const { securityUtil, processUtil } = require('../utils');

router.post('/save', (req, res) => {

    let processData = req.body;
    processData.firmName = "CPSDev"; //This will later be extracted from JWT token

    if (!processData)
        res.status(400).send({ message: "Invalid Input" });

    console.log(processData);
    processUtil.saveprocess(processData)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            return res.status(400).send({ message: "process not saved" });
        })
})


router.post('/getAll', (req, res) => {

    let firmName = req.body.firmName;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    processUtil.getAllprocesss(firmName)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch processs of " + firmName });
        })
})

router.post('/getid', (req, res) => {

    let firmName = req.body.firmName;
    let query = req.body.query;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    processUtil.getprocesssByQuery(firmName, query)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch processs of " + firmName });
        })
})

router.post('/update', (req, res) => {

    let processData = req.body;
    if (!processData)
        res.status(400).send({ message: "Invalid Input" });

    processUtil.updateprocess(processData)
        .then(result => {

            return res.status(200).send({ message: "process Updated" })
        })
        .catch(err => {
            return res.status(400).send({ message: "Failed to update process Details" });
        })
})


module.exports = router;