const { mongoUtil } = require('../endpoint');
const { vendorCollection } = require('../const').collections;


let savevendor = (vendorData) => {

    return new Promise((resolve, reject) => {

        let collection = vendorData.firmName + "_" + vendorCollection;

        //fetch all the vendors with that category
        let newId;
        mongoUtil.getLastOneRecordByQuery(collection, { vendorCategory: vendorData.vendorCategory })
            .then(result => {
                if (result.length) {
                    let lastvendor = result[0];
                    let lastId = lastvendor.vendorId.substr(lastvendor.vendorId.length - 5);
                    lastId = "1" + lastId;
                    let tempId = String(Number(lastId) + 1);
                    lastId = tempId.substr(tempId.length - 5);
                    vendorData.vendorId = vendorData.vendorCategory + lastId;
                    newId = vendorData.vendorId;
                } else {
                    vendorData.vendorId = vendorData.vendorCategory + "00001";
                    newId = vendorData.vendorId;
                }
                return mongoUtil.insert(collection, vendorData)
            })
            .then(result => {
                return resolve({ message: "vendor saved", vendorId: newId });
            })
            .catch(err => {
                return reject(JSON.stringify(err));
            })

    })

}


let getAllvendors = (firmName) => {

    return new Promise((resolve, reject) => {
        let collection = firmName + "_" + vendorCollection;
        mongoUtil.getAll(collection)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to fetch vendors from DB" });
            })
    })

}


let updatevendor = (vendorData) => {

    return new Promise((resolve, reject) => {
        let collection = vendorData.firmName + "_" + vendorCollection;
        mongoUtil.upsert(collection, { vendorCode: vendorData.vendorCode }, vendorData)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to update the data in DB" });
            });

    })

}



module.exports = {
    savevendor,
    getAllvendors,
    updatevendor
}