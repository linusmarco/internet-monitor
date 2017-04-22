const mongoClient = require('mongodb').MongoClient;

module.exports = {
    connect : function(dbPath) {
         return new Promise(function(resolve, reject) {
            mongoClient.connect(dbPath, function(err, db) {
                if(err) { 
                    reject(err);
                } else {
                    resolve(db);
                }
            });
         });
    },

    getCollection : function(db, collName) {
        return new Promise(function(resolve, reject) {
            db.collection(collName, { strict:true }, function(err, collection) {
                if (err) { 
                    reject(err);
                } else {
                    resolve(collection);
                }
            });
        });
    },

    insert : function(collection, doc) {
        return new Promise(function(resolve, reject) {
            collection.insert(doc, { w:1 }, function(err, result) { 
                if (err) { 
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    }
}



