const speedTest = require('speedtest-net');

const getSpeeds = function() {

    return new Promise(function(resolve, reject) {
    
        const now = new Date();
        
        speedTest({maxTime: 5000})
            .on('data', data => {
                console.log("Retrieved speed data");
                data["time"] = now;
                resolve(data);
            })
            .on('error', err => {
                console.error(err);
                resolve({
                    "time": now,
                    "speeds": {
                        "download": NaN,
                        "upload": NaN
                    },
                    "error": err.toString()
                });
            });
    });
}

module.exports = {
    speeds: getSpeeds    
}
