import React from 'react'
import './RequestCard.scss'
import {Button} from '@mui/material'
import Profile from "../../assets/images/person_three.jpg"
import {acceptRequest,deleteRequest} from "../../ReduxActions/requestActions"
import {useDispatch} from 'react-redux'


const FriemdRequest = ({Req,ReqType}) => {

   const dispatch = useDispatch()

    const DeleteRequest =(e)=>{

      if(e.target.name==="withdraw")
      dispatch(deleteRequest(Req.receiver,{action:"withdraw_request"}))
      else
      dispatch(deleteRequest(Req.sender,{action:"reject_request"}))
    }

    const AcceptRequest =()=>{
      dispatch(acceptRequest(Req.sender))
    }
  

  return (
    <div className='request-card'>
      <div className='img-box'>
        {ReqType=="Sent"?<img src={Profile} alt={Req.receiverUsername} title={Req.receiverUsername}/>:<img src={Profile} alt={Req.senderUsername} title={Req.senderUsername}/>}
      </div>

      <div className='req-action-box'>
        <h3>{ReqType==="Sent"?Req.receiverUsername:Req.senderUsername}</h3>
        <span>Request created on <span style={{fontWeight:"bold",color:"green"}}>{Req.createdAt.substr(0,10)}</span> </span>
       {ReqType!="Sent"?<span><Button color='primary' variant='contained' onClick={AcceptRequest}>Accept</Button><Button color='error' variant='contained' onClick={DeleteRequest} name="reject" >Reject</Button></span>:<span><Button color='error' variant='contained' onClick={DeleteRequest} name="withdraw">Withdraw</Button></span>}
      </div>
       
       
    </div>
  )
}

export default FriemdRequest