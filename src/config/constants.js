require('dotenv').config()
const constants = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    API_KEY: process.env.API_KEY,
    FETCH_INTERVAL: process.env.FETCH_INTERVAL,
}

module.exports = constants
