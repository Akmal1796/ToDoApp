import React from 'react'
import './Register.css'
import IMG from '/public/Images/register-img.png'
import { IoPersonSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";

const Register = () => {
    return (
        <div className='login-page'>
            <div className='login-container'>
    
                <div className='login-left-section'>
                    <img src={IMG} className='login-img'/>
                </div>
    
                <div className='login-right-section'>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-container">
                            <i className="icon-class"><IoPersonSharp size={30} color='black'/></i>
                            <input type="text" placeholder="Enter Username" className='input-box'/>
                        </div>
                        <div className="input-container">
                            <i className="icon-class"><MdLock size={30} color='black'/></i>
                            <input type="text" placeholder="Enter Password" className='input-box'/>
                        </div>
                        <div className='terms-section'>
                            <input type='checkbox' />
                            <label>I agree all terms</label>
                        </div>
                        <div>
                            <button type='submit' className='register-btn'>Register</button>
                        </div>
                    </form>
    
                    <div className='login-brand-container'>
                        <div className='login-with-brands-account'>
                        </div>
                        <p>Already have an account? <a href=''>Sign In</a></p>                   
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Register