const cfg = require('../config.json');
const mongoClient = require('mongodb').MongoClient;


mongoClient.connect(cfg['db']['mongoPath'] + cfg['db']['dbName'], function(err, db) {
    if(err) { return console.error(err); }
    
    db.dropDatabase(function(err, result) {
        if (err) { console.error(err); }
        
        console.log("Dropped database '" + cfg['db']['dbName'] + "'");

        db.close();
    });

});
