const express = require('express');
const router = express.Router();
const { securityUtil, projectUtil } = require('../utils');

router.post('/save', (req, res) => {

    let projectData = req.body;
    projectData.firmName = "CPSDev"; //This will later be extracted from JWT token

    if (!projectData)
        res.status(400).send({ message: "Invalid Input" });

    console.log(projectData);
    projectUtil.saveproject(projectData)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            return res.status(400).send({ message: "project not saved" });
        })
})


router.post('/getAll', (req, res) => {

    let firmName = req.body.firmName;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    projectUtil.getAllprojects(firmName)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch projects of " + firmName });
        })
})

router.post('/getid', (req, res) => {

    let firmName = req.body.firmName;
    let query = req.body.query;
    if (!firmName)
        res.status(400).send({ message: "Invalid Input" });

    projectUtil.getprojectsByQuery(firmName, query)
        .then(result => {

            return res.status(200).send(result);
        })
        .catch(err => {

            return res.status(400).send({ message: "Failed to fetch projects of " + firmName });
        })
})

router.post('/update', (req, res) => {

    let projectData = req.body;
    if (!projectData)
        res.status(400).send({ message: "Invalid Input" });

    projectUtil.updateproject(projectData)
        .then(result => {

            return res.status(200).send({ message: "project Updated" })
        })
        .catch(err => {
            return res.status(400).send({ message: "Failed to update project Details" });
        })
})


module.exports = router;