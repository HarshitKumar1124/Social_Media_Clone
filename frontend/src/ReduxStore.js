
//Initializing  REDUX STORE


import {createStore,combineReducers,applyMiddleware} from "redux";

import {thunk} from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"

const {loadUser,userLogout,login} = require('./ReduxReducer/userReducer')
const {getSendRequests,getFriendRequests} = require( "./ReduxReducer/requestsReducer")
const {sendMessage,getConversations,getChat} = require('./ReduxReducer/conversationMessageReducer')


const reducer = combineReducers({

    loadUser,
    getSendRequests,
    getFriendRequests,
    sendMessage,
    getConversations,
    getChat,
    userLogout,
    login

});

let initailState ={
};

const middleware = [thunk]

const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;