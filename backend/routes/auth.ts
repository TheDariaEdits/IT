import express from "express"
const router = express.Router()
const authController = require('../controllers/auth')

router.route('/register') 
    .post(authController.postRegister)

router.route('/login') 
    .post(authController.postLogin)

router.route('/logout') 
    .post(authController.postLogout)

module.exports = router