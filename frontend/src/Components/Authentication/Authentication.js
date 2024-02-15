import React, { useRef } from 'react'
import "./Authentication.scss"
import { useState } from 'react'

import FormTemplate from "../generalComponents/FormTemplate.jsx"

const Authentication = () => {

    const signInRef = useRef(null)
    const signUpRef = useRef(null)
    const sliderRef = useRef(null)
    const [Default,setDefault] = useState(false)


    const toggle =()=>{
        
        if(!Default)
        {
            signInRef.current.classList.add('shiftLeft')
            signUpRef.current.classList.add('shiftLeft')
            sliderRef.current.classList.add('stage2')
            sliderRef.current.classList.remove('stage1')
         
        }
        else{
            signInRef.current.classList.remove('shiftLeft')
            signUpRef.current.classList.remove('shiftLeft')
            sliderRef.current.classList.add('stage1')
            sliderRef.current.classList.remove('stage2')
        }

        setDefault(!Default)
    }

  return (
    <section className='signinout_section'>

        <div className="sign_container">
            <div ref={signInRef}>
                <div>
                    <FormTemplate heading="SIGN IN" subheading="Welcome Back!" template="Signin"/>
                    <p>New User? <span style={{cursor:'pointer'}} title="Click totoggle the menu" onClick={toggle}>SignUp</span></p>
                </div>
            </div>
            <div ref={signUpRef} style={{textAlign:"right"}}>
                <div></div>
                <div>
                    <FormTemplate heading="SIGN UP" subheading="Welcome to the Blogger!" template="Signup"/>
                    <p>Already User? <span  style={{cursor:'pointer'}} title="Click totoggle the menu" onClick={toggle}>SignIN</span></p>
                </div>
                
            </div>

            <div ref={sliderRef}id="colorSlider" className='stage1'>

            </div>

        </div>

    </section>
  )
}

export default Authentication