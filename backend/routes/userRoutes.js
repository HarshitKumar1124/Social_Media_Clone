const express = require('express')
const router = express.Router()
const {userRegister,userLogin,userLogout,userLoad,userGetFriends,getAllUsers} = require('../controllers/userControllers.js')
const {IsAuth} = require('../middleware/userMiddleware.js')


router.route('/user/register').post(userRegister);

router.route('/user/login').post(userLogin);

router.route('/user/logout').post(IsAuth,userLogout);

router.route('/user/load').get(IsAuth,userLoad);

router.route('/user/get/friends').get(IsAuth,userGetFriends);

router.route('/get/users').get(getAllUsers);



module.exports = router;