const mongoClient = require('mongodb').MongoClient;

const dbName = "speeds";

mongoClient.connect("mongodb://localhost:27017/" + dbName, function(err, db) {
    if(err) { return console.error(err); }
    
    db.dropDatabase(function(err, result) {
        if (err) { console.error(err); }
        
        console.log("Dropped database '" + dbName + "'");

        db.close();
    });

});
