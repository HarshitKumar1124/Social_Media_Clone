const express = require('express')
const router = express.Router()
const {userRegister} = require('../controllers/userControllers.js')
const userMiddleware = require('../middleware/userMiddleware.js')


router.route('/user/register').post(userRegister);



module.exports = router;