const db = require('./db.js');
const gather = require('./gather.js');

dbName = "speeds";
collName = "measurements";

db.connect(dbName, function(database) {
    db.getCollection(database, collName, function(collection) {
        gather.speeds(function(data) {
            db.insert(collection, data, function(data) {
                console.log(data)
            });
        });
    });
});
//console.log(database);
//collection = db.getCollection(database, collName);
//console.log(collection);

//data = gather.getSpeeds();
//db.insert(collection, data);
