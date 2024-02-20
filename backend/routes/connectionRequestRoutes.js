const express = require('express');
const { IsAuth } = require('../middleware/userMiddleware');
const router = express.Router();
const {sendFriendRequest,getConnectionRequests} = require('../controllers/connectionRequestControllers.js')

router.route('/user/friendrequest/:id').post(IsAuth,sendFriendRequest);

router.route('/user/getconnectionrequests').get(IsAuth,getConnectionRequests)  

module.exports = router