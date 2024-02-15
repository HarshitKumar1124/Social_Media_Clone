import React, { useState ,useEffect} from "react";
import { Button } from '@mui/material'
import {useDispatch,useSelector} from "react-redux"

import { loadUser } from "../../ReduxActions/userActions";
import { useNavigate } from "react-router-dom";

// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../Authentication/Authentication.scss"


const FormTemplate = ({heading,subheading,template}) => {

  const dispatch = useDispatch()
  const Navigate = useNavigate()

 const [email,setEmail] = useState("")
 const [name,setName] = useState("")
 const [password,setPassword] = useState("")

 const {loading,isAuth,response} = useSelector((state)=>state.login)
 const {loading: UserLoading,isAuth:UserLoadAuth,user} = useSelector((state)=>state.loadUser)

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
      //dispatch signup
    }
    else{
      const body = {email,password};
      // console.log(body)
    //   dispatch(loginUser(body));
    }

    

  }


  useEffect(() => {

    if(UserLoadAuth==undefined)
    dispatch(loadUser());
  else if(UserLoadAuth)
  {
    Navigate('/user/dashboard')
  }

    if(isAuth )
    {
      
    //   toast.success(response.message)
      Navigate('/user/dashboard')
    }
    else if(isAuth==false)
    {
    //   toast.error(response)
      console.log('Try Again!')
    }
   
  }, [loading,UserLoadAuth])
  

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