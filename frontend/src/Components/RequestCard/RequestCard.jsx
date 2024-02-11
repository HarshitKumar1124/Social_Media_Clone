import React from 'react'
import './RequestCard.scss'
import { useParams } from 'react-router-dom'
import {Button} from '@mui/material'
import Profile from "../../assets/images/person_three.jpg"

const FriemdRequest = ({Req,ReqType}) => {

    const fetchparams = useParams();
  

  return (
    <div className='request-card'>
      <div className='img-box'>
        {ReqType=="Sent"?<img src={Profile} alt={Req.receiverUsername} title={Req.receiverUsername}/>:<img src={Profile} alt={Req.senderUsername} title={Req.senderUsername}/>}
      </div>

      <div className='req-action-box'>
        <h3>{ReqType==="Sent"?Req.receiverUsername:Req.senderUsername}</h3>
        <span>Request created on <span style={{fontWeight:"bold",color:"green"}}>{Req.createdAt.substr(0,10)}</span> </span>
       {ReqType!="Sent"?<span><Button color='primary' variant='contained' >Accept</Button><Button color='error' variant='contained'>Reject</Button></span>:<span><Button color='error' variant='contained'>Withdraw</Button></span>}
      </div>
       
       
    </div>
  )
}

export default FriemdRequest