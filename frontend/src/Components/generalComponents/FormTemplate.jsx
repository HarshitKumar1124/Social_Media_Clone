import React, { useState ,useEffect,useContext} from "react";
import { Button } from '@mui/material'
import {useDispatch,useSelector} from "react-redux"

import { loginUser } from "../../ReduxActions/userActions";
import { useNavigate } from "react-router-dom";

// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../Authentication/Authentication.scss"

import SocketContext from "../../utils/SocketContext.js";
import io from 'socket.io-client'


const FormTemplate = ({heading,subheading,template}) => {

  const dispatch = useDispatch()
  const Navigate = useNavigate()

 const [email,setEmail] = useState("")
 const [name,setName] = useState("")
 const [password,setPassword] = useState("")

 const {loading,isAuth,user} = useSelector((state)=>state.User)
 const {socket,setSocket} = useContext(SocketContext)



  const HandleChange =(e)=>{

    const element = e.target.id

    if(element=="name")
    setName(e.target.value)
  else if(element=="email")
  setEmail(e.target.value);
  else{
  setPassword(e.target.value)
  }

  }

  const OnSubmit =()=>{

   

    if(template=="Signup")
    {
      const body = {name,email,password};
      console.log(body);
      alert('signup')
      //dispatch signup
    }
    else{
      const body = {email,password};
      dispatch(loginUser(body));
      
    
     
    }


  }


  useEffect(() => {

    if(isAuth)
    {
      let instance_of_socket = io('http://localhost:4000',{
        query:{
          user_id:user._id
        }
      })

      setSocket(instance_of_socket)
      console.log('user from frontend is Authenticated and socket created!',instance_of_socket)

      Navigate('/user/dashboard')
    }
   
     
  }, [isAuth])

 
  
  



  


  

  return (
    <React.Fragment id="form_container" >
      <div >{heading}</div>
      <div>{subheading}</div>

      {template=="Signup"?<>
      <section>
      <label for="name">Username</label>
      <input type="text" id="name" placeholder="Enter your Username" onChange={HandleChange} value={name} />
      </section>
      </>:<></>}

      <section>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email id" onChange={HandleChange} value={email} />
      </section>

      <section>
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your Password" onChange={HandleChange} value={password} />
      </section>
     
      <Button onClick={OnSubmit}>{template}</Button>
    </React.Fragment >
  );
};

export default FormTemplate;