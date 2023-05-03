import express from "express"
const router = express.Router()
const mainController = require('../controllers/main')

router.route('/') 
    .get(mainController.getMain)

router.route('/profile')
    .get(mainController.getProfile)

router.route('/upload-by-link')
    .post(mainController.postPhotos)

router.route('/upload')
    .post(mainController.postDevicePhotos)

module.exports = router