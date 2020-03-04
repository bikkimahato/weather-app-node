const request = require('request')

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYmlra2ltYWhhdG8iLCJhIjoiY2s1M2Zocm8zMDA0aTNzcGsyZTZ1d2YxZCJ9.KT5fqNKy8aanr1lDFnBViA&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Connect')
        } else if (body.features.length === 0) {
            callback('Unable to find location')
        } else {
            callback(null, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode