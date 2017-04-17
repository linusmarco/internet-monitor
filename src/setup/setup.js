const mongoClient = require('mongodb').MongoClient;

const dbName = "speeds";
const collName = "measurements";

mongoClient.connect("mongodb://localhost:27017/" + dbName, function(err, db) {
    if(err) { console.error(err) }

    console.log("Connected to '" + dbName + "'");

    db.createCollection(collName, { strict: true }, function(err, collection) {
        if (err) { console.error(err) }

        console.log("Created collection '" + collName + "'");

        db.close();
    });

});

