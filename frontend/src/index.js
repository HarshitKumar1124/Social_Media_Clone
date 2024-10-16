import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Provider} from "react-redux"
// import ReduxStore from "./ReduxStore";
// import SocketContextProvider from './utils/SocketContextProvider'
// import UserSearchChatContextProvider from './utils/userSearchChatContext/userSearchChatContextProvider.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
//  <SocketContextProvider>
//   <Provider store={ReduxStore}>
//     <UserSearchChatContextProvider>
//     <App />
//     </UserSearchChatContextProvider>
//   </Provider>
//   </SocketContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
