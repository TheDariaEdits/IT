import express from "express"
const router = express.Router()
const multer  = require('multer')
const mainController = require('../controllers/main')

router.route('/') 
    .get(mainController.getMain)

router.route('/profile')
    .get(mainController.getProfile)

router.route('/upload-by-link')
    .post(mainController.postPhotos)

const photoMiddleware = multer({dest: 'uploads'})
router.route('/upload')
    .post(photoMiddleware.array('photos', 100), mainController.postDevicePhotos)

router.route('/companies')
    .post(mainController.postCompanies)

module.exports = router