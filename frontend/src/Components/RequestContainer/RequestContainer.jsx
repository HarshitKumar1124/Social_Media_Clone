import React,{useEffect, useState} from 'react'
import './RequestContainer.scss'
import RequestCard from '../RequestCard/RequestCard'
import { useDispatch, useSelector } from 'react-redux'
import {getSendRequests,getFriendRequests} from "../../ReduxActions/requestActions"

const RequestContainer = () => {

    const {isAuth,user} = useSelector(state=>state.loadUser)
    const {loading,fetched,requests:Sentrequests} = useSelector(state=>state.getSendRequests)
    const {loading2,fetched2,Receivedrequests} = useSelector(state=>state.getFriendRequests)

  
    const dispatch = useDispatch()
  
    useEffect(() => {
  
      dispatch(getSendRequests());
      dispatch(getFriendRequests())
    
    }, [])

    const [ViewReceivedRequest,setViewRequest] = useState(true)

    const ToggleReqTab=()=>{
      
        setViewRequest(!ViewReceivedRequest)
    }
    
    
  return (
    
   <div className='req-container'>
   
   <div className='req-main-container'>
      <div className='toggle-request-tab'>
        <span onClick={ToggleReqTab} className={ViewReceivedRequest?`active`:``}>Received Requests</span>
        <span onClick={ToggleReqTab} className={ViewReceivedRequest==false?`active`:``}>Sent Requests</span>
     
      </div>

      <div className='req-list-container'>
        
        {loading==false && ViewReceivedRequest==false?(Sentrequests.length!=0?Sentrequests.map((items,idx)=>{
            return <RequestCard Req={items} key={idx} ReqType="Sent"/>
        }):<><p>No Friend Requests Sent!</p></>):<></>}



        {loading==false  && loading2===false &&  ViewReceivedRequest==true ?( Receivedrequests.length!=0?Receivedrequests.map((items,idx)=>{
            return <RequestCard Req={items} key={idx} ReqType="Received"/>
        }):<><p>No Friend Requests Received!</p></>):<></>}

      </div>
      

    </div>
    <div className='req-user-info-display'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur ducimus cupiditate! Dolorem eius dolorum voluptas rerum animi fugiat, quidem temporibus magni mollitia veritatis doloremque iusto tempore adipisci odio suscipit?</div>
  </div>

  )
}

export default RequestContainer