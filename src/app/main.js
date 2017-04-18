const db = require('./db.js');
const gather = require('./gather.js');

dbName = "speeds";
collName = "measurements";

database = db.connect(dbName);
console.log(database);
collection = db.getCollection(database, collName);
console.log(collection);

data = gather.getSpeeds();
db.insert(collection, data);
