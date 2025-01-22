const express = require('express')
const { addCity, deleteCity } = require('../controllers/cityController')
const { getWeatherData } = require('../controllers/weatherController')
const { getAlerts } = require('../controllers/alertController')

const router = express.Router()

router.post('/cities', addCity) //Add city API
router.delete('/cities/:city', deleteCity) //Delete City
router.get('/weather', getWeatherData) // Weather retrieval API
router.get('/alerts', getAlerts) // Get Alerts

module.exports = router
