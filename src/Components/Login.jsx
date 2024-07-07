import React from 'react'
import './Login.css'
import IMG from '/public/Images/login-img.png'
import google from '/public/Images/google.png'
import facebook from '/public/Images/fb.png'
import twitter from '/public/Images/twitter.png'
import { IoPersonSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";

const Login = () => {
  return (
    <div className='login-page'>
        <div className='login-container'>

            <div className='login-left-section'>
                <h1>Sign In</h1>
                <form>
                    <div class="input-container">
                        <i class="icon-class"><IoPersonSharp size={30} color='black'/></i>
                        <input type="text" placeholder="Enter Username" className='input-box'/>
                    </div>
                    <div class="input-container">
                        <i class="icon-class"><MdLock size={30} color='black'/></i>
                        <input type="text" placeholder="Enter Password" className='input-box'/>
                    </div>
                    <div className='remeber-me-section'>
                        <input type='checkbox' />
                        <label>Remeber me</label>
                    </div>
                    <div>
                        <button type='submit' className='login-btn'>Login</button>
                    </div>
                </form>

                <div className='login-brand-container'>
                    <div className='login-with-brands-account'>
                        <p>Or, Login with</p>
                        <img src={facebook} width={25}/>
                        <img src={google} width={25}/>
                        <img src={twitter} width={25}/>
                    </div>
                    <p>Don't have an account? <a href=''>Create One</a></p>                   
                </div>
            </div>

            <div className='login-right-section'>
                <img src={IMG} className='login-img'/>
            </div>
        </div>
    </div>
  )
}

export default Login