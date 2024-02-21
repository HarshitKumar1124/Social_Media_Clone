const express = require('express');
const { IsAuth } = require('../middleware/userMiddleware');
const router = express.Router();
const {sendFriendRequest,getConnectionRequests,acceptRequest,deleteRequest} = require('../controllers/connectionRequestControllers.js')

router.route('/user/friendrequest/:id').post(IsAuth,sendFriendRequest);

router.route('/user/getconnectionrequests').get(IsAuth,getConnectionRequests)  

router.route('/user/acceptrequest/:id').patch(IsAuth,acceptRequest) ;    

router.route('/user/deleterequest/:id').delete(IsAuth,deleteRequest) ;  

module.exports = router