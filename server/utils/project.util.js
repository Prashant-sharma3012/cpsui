const { mongoUtil } = require('../endpoint');
const { projectCollection } = require('../const').collections;


let saveproject = (projectData) => {

    return new Promise((resolve, reject) => {

        let collection = projectData.firmName + "_" + projectCollection;

        //fetch all the projects with that category
        let newId;
        mongoUtil.getLastOneRecordByQuery(collection, { projectCategory: projectData.projectCategory })
            .then(result => {
                if (result.length) {
                    let lastproject = result[0];
                    let lastId = lastproject.projectId.substr(lastproject.projectId.length - 5);
                    lastId = "1" + lastId;
                    let tempId = String(Number(lastId) + 1);
                    lastId = tempId.substr(tempId.length - 5);
                    projectData.projectId = projectData.projectCategory + lastId;
                    newId = projectData.projectId;
                } else {
                    projectData.projectId = projectData.projectCategory + "00001";
                    newId = projectData.projectId;
                }
                return mongoUtil.insert(collection, projectData)
            })
            .then(result => {
                return resolve({ message: "project saved", projectId: newId });
            })
            .catch(err => {
                return reject(JSON.stringify(err));
            })

    })

}


let getAllprojects = (firmName) => {

    return new Promise((resolve, reject) => {
        let collection = firmName + "_" + projectCollection;
        mongoUtil.getAll(collection)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to fetch projects from DB" });
            })
    })

}


let updateproject = (projectData) => {

    return new Promise((resolve, reject) => {
        let collection = projectData.firmName + "_" + projectCollection;
        mongoUtil.upsert(collection, { projectCode: projectData.projectCode }, projectData)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to update the data in DB" });
            });

    })

}



module.exports = {
    saveproject,
    getAllprojects,
    updateproject
}