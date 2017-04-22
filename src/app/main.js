const cfg = require('../config.json');
const db = require('./db.js');
const gather = require('./gather.js');


const recordSpeed = function(collection) {
    setInterval(() => {
         gather.speeds()
            .then(s => db.insert(collection, s))
            .catch(e => console.error("Failed to insert speed into db"));
    }, cfg['measurementInterval']);
}

db.connect(cfg['db']['mongoPath'] + cfg['db']['dbName'])
    .then(d => db.getCollection(d, cfg['db']['collName']))
    .then(c => recordSpeed(c))
    .catch(e => console.error(e));

