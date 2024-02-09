const express = require('express');
const { IsAuth } = require('../middleware/userMiddleware');
const router = express.Router();
const {sendFriendRequest,getAllFriendRequests,getAllSendFriendRequests} = require('../controllers/connectionRequestControllers.js')

router.route('/user/friendrequest/:id').post(IsAuth,sendFriendRequest);

router.route('/user/getfriendrequests').get(IsAuth,getAllFriendRequests)  //receiver

router.route('/user/getsendfriendrequests').get(IsAuth,getAllSendFriendRequests)  //sender

module.exports = router