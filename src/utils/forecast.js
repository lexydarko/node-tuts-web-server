const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ce733a8f5d292a9c89150e0caa494a8&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'At ' +  body.current.observation_time + ' the weather is ' + body.current.weather_descriptions + ' and It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.' )
        }
    })
}

module.exports = forecast