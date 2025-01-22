const City = require('../models/City')

exports.addCity = async (req, res) => {//Add city
    try {
        const { name } = req.body
        const city = new City({ name })
        await city.save()
        res.status(201).json({ message: 'City added successfully', city })
    } catch (error) {
        res.status(500).json({ error: `Error adding city ${error}` })
    }
}

exports.deleteCity = async (req, res) => {// Delete City
    try {
        const { city } = req.params
        await City.findOneAndDelete({ name: city })
        res.status(200).json({ message: 'City removed successfully' })
    } catch (error) {
        res.status(500).json({ error: `Error deleting city ${error}` })
    }
}
