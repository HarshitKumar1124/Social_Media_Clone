const express = require('express');
const { IsAuth } = require('../middleware/userMiddleware');
const router = express.Router()

const {sendMessage,getConversations,getChats,deleteMessage} = require('../controllers/conversationMessageControllers')


router.route('/user/chat/send/message/:id').post(IsAuth,sendMessage)

router.route('/user/get/conversations').get(IsAuth,getConversations)

router.route('/user/get/chats/:id').get(IsAuth,getChats)

router.route('/user/delete/message/:id').delete(IsAuth,deleteMessage)


module.exports = router;