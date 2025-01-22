const Alert = require('../models/Alert')

const processAlerts = async (city, weatherData) => {
    const alerts = []
    const { main, weather } = weatherData
    const temperature = main.temp
    const condition = weather[0].main.toLowerCase()

    if (condition.includes('rain')) {
        alerts.push('Rain')
    }
    if (temperature > 30) {
        alerts.push('High Temperature')
    }
    if (temperature < 10) {
        alerts.push('Low Temperature')
    }
    console.log('object')

    for (const type of alerts) {
        await Alert.create({ city, type })
        console.log(`Alert: ${type} detected in ${city} at ${new Date()}`)
    }

    return alerts
}

module.exports = { processAlerts }
