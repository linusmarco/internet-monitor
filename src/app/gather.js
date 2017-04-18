const speedTest = require('speedtest-net');

let getSpeeds = function() {
    speedTest({maxTime: 5000})
        .on('data', data => {
            console.log("Retrieved speed data");
            data["time"] = new Date();
            return data;
        })
        .on('error', err => {
            console.error(err);
            return null;
        });
};

module.exports = {
    speeds: getSpeeds    
}
