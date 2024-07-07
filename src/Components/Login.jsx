import React from 'react'
import './Login.css'
import IMG from '/public/Images/login-img.png'

const Login = () => {
  return (
    <div className='login-page'>
        <div className='login-left-section'></div>
        <div className='login-right-section'>
            <img src={IMG} />
        </div>
    </div>
  )
}

export default Login