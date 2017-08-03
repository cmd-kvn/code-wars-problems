/*
Your job is to check that the provided list of stations contains all of the stops Alan mentions. There will be other stations in the array. Example:

['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
If the stations all appear, return 'Smell my cheese you mother!', if not, return 'No, seriously, run. You will miss it.'.
*/

module.exports = function alan(x) {
    const stations = {
        Rejection: 'Rejection',
        Disappointment: 'Disappointment',
        'Backstabbing Central': 'Backstabbing Central',
        'Shattered Dreams Parkway': 'Shattered Dreams Parkway'
    };
    let count = 0;
    let message;

    x.map(stn => {
        if (stations.hasOwnProperty(stn)) {
            delete stations[stn];   // so it only counts for a station appearing once
            count++;
        }
    });

    (count === 4) ? message = 'Smell my cheese you mother!' : message = 'No, seriously, run. You will miss it.';

    return message;
};
