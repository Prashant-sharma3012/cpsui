const { mongoUtil } = require('../endpoint');
const { quoteCollection } = require('../const').collections;


let savequote = (quoteData) => {

    return new Promise((resolve, reject) => {

        let collection = quoteData.firmName + "_" + quoteCollection;

        //fetch all the quotes with that category
        let newId;
        mongoUtil.getLastOneRecordByQuery(collection, { quoteCategory: quoteData.quoteCategory })
            .then(result => {
                if (result.length) {
                    let lastquote = result[0];
                    let lastId = lastquote.quoteId.substr(lastquote.quoteId.length - 5);
                    lastId = "1" + lastId;
                    let tempId = String(Number(lastId) + 1);
                    lastId = tempId.substr(tempId.length - 5);
                    quoteData.quoteId = quoteData.quoteCategory + lastId;
                    newId = quoteData.quoteId;
                } else {
                    quoteData.quoteId = quoteData.quoteCategory + "00001";
                    newId = quoteData.quoteId;
                }
                return mongoUtil.insert(collection, quoteData)
            })
            .then(result => {
                return resolve({ message: "quote saved", quoteId: newId });
            })
            .catch(err => {
                return reject(JSON.stringify(err));
            })

    })

}


let getAllquotes = (firmName) => {

    return new Promise((resolve, reject) => {
        let collection = firmName + "_" + quoteCollection;
        mongoUtil.getAll(collection)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to fetch quotes from DB" });
            })
    })

}


let updatequote = (quoteData) => {

    return new Promise((resolve, reject) => {
        let collection = quoteData.firmName + "_" + quoteCollection;
        mongoUtil.upsert(collection, { quoteCode: quoteData.quoteCode }, quoteData)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({ message: "Failed to update the data in DB" });
            });

    })

}



module.exports = {
    savequote,
    getAllquotes,
    updatequote
}