const express = require('express')
const router = express.Router()

const {IsAuth} = require('../middleware/userMiddleware') 
const {getPosts,createPosts,createComment,getUserPosts,doLike} = require('../controllers/postControllers.js')


router.route('/new/post').post(IsAuth,createPosts);

router.route('/get/posts').get(getPosts);

router.route('/get/user/posts').get(IsAuth,getUserPosts);

router.route('/post/:id/comment').patch(IsAuth,createComment);

router.route('/post/:id/like').patch(IsAuth,doLike);


module.exports = router;