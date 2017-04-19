const mongoClient = require('mongodb').MongoClient;

module.exports = {
    connect : function(dbName) {
         return new Promise(function(resolve, reject) {
            mongoClient.connect("mongodb://localhost:27017/" + dbName, function(err, db) {
                if(err) { 
                    reject(err);
                } else {
                    console.dir("Connected to '" + dbName + "'");
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
                    console.dir("Connected to collection '" + collName + "'");
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
                    console.dir("Inserted speeds into database");
                    resolve(doc);
                }
            });
        });
    }
}



