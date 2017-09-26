const { mongoUtil } = require('../endpoint');
const { processCollection } = require('../const').collections;


let saveprocess = (processData) => {

    return new Promise((resolve, reject) => {

        let collection = processData.firmName + "_" + processCollection;

        //fetch all the processs with that category
        let newId;
        mongoUtil.getLastOneRecordByQuery(collection, { processCategory: processData.processCategory })
            .then(result => {
                if (result.length) {
                    let lastprocess = result[0];
                    let lastId = lastprocess.processId.substr(lastprocess.processId.length - 5);
                    lastId = "1" + lastId;
                    let tempId = String(Number(lastId) + 1);
                    lastId = tempId.substr(tempId.length - 5);
                    processData.processId = processData.processCategory + lastId;
                    newId = processData.processId;
                } else {
                    processData.processId = processData.processCategory + "00001";
                    newId = processData.processId;
                }
                return mongoUtil.insert(collection, processData)
            })
            .then(result => {
                return resolve({ message: "process saved", processId: newId });
            })
            .catch(err => {
                return reject(JSON.stringify(err));
            })

    })

}


let getAllprocesss = (firmName) => {

    return new Promise((resolve, reject) => {
        let collection = firmName + "_" + processCollection;
        mongoUtil.getAll(collection)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to fetch processs from DB" });
            })
    })

}


let updateprocess = (processData) => {

    return new Promise((resolve, reject) => {
        let collection = processData.firmName + "_" + processCollection;
        mongoUtil.upsert(collection, { processCode: processData.processCode }, processData)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to update the data in DB" });
            });

    })

}



module.exports = {
    saveprocess,
    getAllprocesss,
    updateprocess
}