
//Initializing  REDUX STORE


import {createStore,combineReducers,applyMiddleware} from "redux";

import {thunk} from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"

const {loadUser} = require('./ReduxReducer/userReducer')
const {getSendRequests,getFriendRequests} = require( "./ReduxReducer/requestsReducer")


const reducer = combineReducers({

    loadUser,
    getSendRequests,
    getFriendRequests,

});

let initailState ={
};

const middleware = [thunk]

const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;