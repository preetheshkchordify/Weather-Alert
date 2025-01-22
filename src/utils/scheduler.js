const cron = require('node-cron')
const City = require('../models/City')
const Weather = require('../models/Weather')
const { fetchWeatherData } = require('../services/WeatherService')
const { processAlerts } = require('./alertProcessor')
const constants = require('../config/constants')

const startScheduler = () => {
    cron.schedule(`*/${constants.FETCH_INTERVAL} * * * *`, async () => {
        console.log('Fetching weather data from Open weather')
        const cities = await City.find()

        for (const { name: city } of cities) {
            try {
                const weatherData = await fetchWeatherData(city)
                // console.log(weatherData.main)
                await Weather.create({
                    city,
                    temperature: weatherData.main.temp,
                    condition: weatherData.weather[0].main,
                })
                await processAlerts(city, weatherData)
            } catch (error) {
                console.error(`Error processing city ${city}:`, error.message)
            }
        }
    })
}

module.exports = { startScheduler }
