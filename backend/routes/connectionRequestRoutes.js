const express = require('express');
const { IsAuth } = require('../middleware/userMiddleware');
const router = express.Router();
const {sendFriendRequest,getConnectionRequests,acceptRequest,deleteRequest} = require('../controllers/connectionRequestControllers.js')

router.route('/user/friendrequest/:id').post(IsAuth,sendFriendRequest);

router.route('/user/getconnectionrequests').get(IsAuth,getConnectionRequests)  

router.route('/user/acceptrequest/:id').patch(IsAuth,acceptRequest) ;    

router.route('/user/deleterequest/:id').post(IsAuth,deleteRequest) ;  
/* Unlike methods such as POST or PUT, DELETE does not typically involve sending a request body with data, as the operation is straightforward and focused on resource deletion. Thus, we se here Post rather than delete*/

module.exports = router