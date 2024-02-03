const express = require('express')
const router = express.Router()
const {userRegister,userLogin,userLogout,userLoad} = require('../controllers/userControllers.js')
const {IsAuth} = require('../middleware/userMiddleware.js')


router.route('/user/register').post(userRegister);

router.route('/user/login').post(userLogin);

router.route('/user/logout').post(IsAuth,userLogout);

router.route('/user/load').get(IsAuth,userLoad);



module.exports = router;