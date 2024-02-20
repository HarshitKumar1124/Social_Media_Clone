import React, { useState,useEffect } from 'react'
import { getConnectionRequests, sendFriendRequest } from '../../ReduxActions/requestActions'
import {useDispatch, useSelector} from 'react-redux'

const SendRequestBox = () => {

  const dispatch=useDispatch()
  const {loading,target_id,getChatStatus} = useSelector(state=>state.getChat)
  const {user} = useSelector(state=>state.User)
  const {getRequestsStatus,requests} = useSelector(state=>state.getConnectionRequests)

  const [Sent,setSent] = useState(false)
  const [ReceivedRequest,setReceivedRequest] = useState(false)

  const SendFriendRequest = ()=>{
        // dispatch send request
        setSent(true)
        dispatch(sendFriendRequest(target_id))

  }

  useEffect(() => {


   
    if(target_id!=undefined)
    dispatch(getConnectionRequests(target_id))

 

    

  }, [])


  useEffect(() => {

    console.log('yaha aaya1',getRequestsStatus)

    if( getRequestsStatus){

      console.log('yaha aaya',requests)
     

        requests.forEach(item=>{
          if(item.receiver===target_id && item.sender===user._id)
          setSent(true)
        
          if(item.receiver===user._id && item.sender==target_id){
          setReceivedRequest(true)
          }
        })

    }
   
  }, [getRequestsStatus])
  

  useEffect(() => {

    console.log(Sent,ReceivedRequest)
   
  }, [Sent,ReceivedRequest])
  
  
  

 

  return (
   
       getRequestsStatus?<>
                <div>
                 { ReceivedRequest==false?(Sent==false?<button onClick={SendFriendRequest}>Send Request</button>:<button disabled >Already sent friend request!</button>):<>
                    <button>Accept Request</button>
                    <button>Reject Request</button>
                 </>}
                
                </div>
      </>:<></>

  )
}

export default SendRequestBox