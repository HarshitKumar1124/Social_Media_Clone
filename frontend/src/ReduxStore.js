
//Initializing  REDUX STORE


import {createStore,combineReducers,applyMiddleware} from "redux";

import {thunk} from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"

const {User,getAllUsers} = require('./ReduxReducer/userReducer')
const {getConnectionRequests,sendFriendRequest} = require( "./ReduxReducer/requestsReducer")
const {sendMessage,getConversations,getChat} = require('./ReduxReducer/conversationMessageReducer')


const reducer = combineReducers({

    User,
    getConnectionRequests,
    sendMessage,
    getConversations,
    getChat,
    getAllUsers,
    sendFriendRequest

    

});

let initailState ={
};

const middleware = [thunk]

const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;