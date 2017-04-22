const cfg = require('../config.json');
const mongoClient = require('mongodb').MongoClient;


mongoClient.connect(cfg['db']['mongoPath'] + cfg['db']['dbName'], function(err, db) {
    if(err) { console.error(err) }

    console.log("Connected to '" + cfg['db']['dbName'] + "'");

    db.createCollection(cfg['db']['collName'], { strict: true }, function(err, collection) {
        if (err) { console.error(err) }

        console.log("Created collection '" + cfg['db']['collName'] + "'");

        db.close();
    });

});

