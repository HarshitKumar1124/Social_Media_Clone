const express = require('express');
const { IsAuth } = require('../middleware/userMiddleware');
const router = express.Router()

const {sendMessage,getConversations,getChats} = require('../controllers/conversationMessageControllers')


router.route('/user/chat/send/message/:id').post(IsAuth,sendMessage)

router.route('/user/get/conversations').get(IsAuth,getConversations)

router.route('/user/get/chats/:id').get(IsAuth,getChats)


module.exports = router;