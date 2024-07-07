import React from 'react'
import './Login.css'
import IMG from '/public/Images/login-img.png'
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
                        <input type="text" placeholder="Enter Username" />
                    </div>
                    <div class="input-container">
                        <i class="icon-class"><MdLock size={30} color='black'/></i>
                        <input type="text" placeholder="Enter Password" />
                    </div>
                    <div>
                        <label>Remeber me</label>
                        <input type='checkbox' />
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>

                <div>
                    <p>Or, Login with</p>
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