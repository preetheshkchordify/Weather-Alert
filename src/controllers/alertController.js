const Alert = require('../models/Alert')

exports.getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find()// Find All Alerts
        res.status(200).json(alerts)
    } catch (error) {
        res.status(500).json({ error: `Error fetching alerts ${error}` })
    }
}
