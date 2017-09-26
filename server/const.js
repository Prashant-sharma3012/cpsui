module.exports = {
    mongoUrlLocal: 'mongodb://127.0.0.1:27017/cpsdb',
    mongoUrlLabs: 'mongodb://projectCPS:cpsProjectDB123@ds123933.mlab.com:23933/cpsdb',
    devLogger: true,
    collections: {
        userCollection: "user",
        itemCollection: "item",
        vendorCollection: "vendor",
        processCollection: "process",
        projectCollection: "project",
        quoteCollection: "quote"
    }
};