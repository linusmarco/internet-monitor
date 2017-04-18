const mongoClient = require('mongodb').MongoClient;

module.exports = {
    connect : function(dbName) {
         return mongoClient.connect("mongodb://localhost:27017/" + dbName, function(err, db) {
            if(err) { 
                console.error(err);
                return null;
            } else {
                console.dir("Connected to '" + dbName + "'");
                return db;
            }
        });
    },

    getCollection : function(db, collName) {
        return db.collection(collName, { strict:true }, function(err, collection) {
            if (err) { 
                console.error(err);
                return null;
            } else {
                console.dir("Connected to collection '" + collName + "'");
                return collection;
            }
        });
    },

    insert : function(collection, doc) {
        return collection.insert(doc, { w:1 }, function(err, result) { 
            if (err) { 
                console.error(err);
                return null;
            } else {
                console.dir("Inserted speeds into database");
                return doc;
            }
        });    
    }
}



