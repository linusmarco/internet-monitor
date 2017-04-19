const db = require('./db.js');
const gather = require('./gather.js');

const dbName = "speeds";
const collName = "measurements";

const recordSpeed = function(collection) {
    gather.speeds()
        .then(s => db.insert(collection, s));
}

db.connect(dbName)
    .then(d => db.getCollection(d, collName))
    .then(c => recordSpeed(c))
    .catch(e => console.error(e));

