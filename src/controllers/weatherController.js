const Weather = require('../models/Weather')

exports.getWeatherData = async (req, res) => {//Get all weather data
    try {
        const weatherData = await Weather.find()
        res.status(200).json(weatherData)
    } catch (error) {
        res.status(500).json({ error: `Error fetching weather data ${error}` })
    }
}
