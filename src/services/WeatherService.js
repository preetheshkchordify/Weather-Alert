const axios = require('axios')
const constants = require('../config/constants')

const fetchWeatherData = async (city) => {
    //Fetch weather data from OpenWeatherMap
    const { API_KEY } = constants
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error.message)
        throw error
    }
}

module.exports = { fetchWeatherData }
