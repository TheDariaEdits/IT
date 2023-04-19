import express from "express"
const router = express.Router()
const mainController = require('../controllers/main')

router.route('/') 
    .get(mainController.getMain)

router.route('/profile')
    .get(mainController.getProfile)

module.exports = router