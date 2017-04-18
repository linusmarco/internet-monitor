const mongoClient = require('mongodb').MongoClient;

module.exports = {
    connect : function(dbName, callback) {
         return mongoClient.connect("mongodb://localhost:27017/" + dbName, function(err, db) {
            if(err) { 
                console.error(err);
                return null;
            } else {
                console.dir("Connected to '" + dbName + "'");
                callback(db);
            }
        });
    },

    getCollection : function(db, collName, callback) {
        return db.collection(collName, { strict:true }, function(err, collection) {
            if (err) { 
                console.error(err);
                return null;
            } else {
                console.dir("Connected to collection '" + collName + "'");
                callback(collection);
            }
        });
    },

    insert : function(collection, doc, callback) {
        return collection.insert(doc, { w:1 }, function(err, result) { 
            if (err) { 
                console.error(err);
                return null;
            } else {
                console.dir("Inserted speeds into database");
                callback(doc);
            }
        });    
    }
}



