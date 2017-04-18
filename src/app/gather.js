const speedTest = require('speedtest-net');

const getSpeeds = function(callback) {
    const now = new Date();
    
    speedTest({maxTime: 5000})
        .on('data', data => {
            console.log("Retrieved speed data");
            data["time"] = now;
            callback(data);
        })
        .on('error', err => {
            console.error(err);
            callback({
                "time": now,
                "speeds": {
                    "download": NaN,
                    "upload": NaN
                },
                "error": err.toString()
            });
        });
};

module.exports = {
    speeds: getSpeeds    
}
