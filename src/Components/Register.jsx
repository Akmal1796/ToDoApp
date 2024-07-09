import React from 'react'
import './Register.css'
import IMG from '/public/Images/register-img.png'
import { IoPersonSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";

const Register = ({ onLogin }) => {
    return (
        <div className='register-page'>
            <div className='register-container'>
    
                <div className='register-left-section'>
                    <img src={IMG} className='login-img'/>
                </div>
    
                <div className='register-right-section'>
                    <h1>Sign Up</h1>
                    <form>
                        <div className="register-input-container">
                            <i className="icon-class"><MdPersonAddAlt1 size={30} color='black'/></i>
                            <input type="text" placeholder="Enter First Name" className='register-input-box'/>
                        </div>
                        <div className="register-input-container">
                            <i className="icon-class"><MdPersonAddAlt size={30} color='black'/></i>
                            <input type="text" placeholder="Enter Last Name" className='register-input-box'/>
                        </div>
                        <div className="register-input-container">
                            <i className="icon-class"><IoPersonSharp size={30} color='black'/></i>
                            <input type="text" placeholder="Enter Username" className='register-input-box'/>
                        </div>
                        <div className="register-input-container">
                            <i className="icon-class"><IoMdMail size={30} color='black'/></i>
                            <input type="text" placeholder="Enter Email" className='register-input-box'/>
                        </div>
                        <div className="register-input-container">
                            <i className="icon-class"><MdLock size={30} color='black'/></i>
                            <input type="password" placeholder="Enter Password" className='register-input-box'/>
                        </div>
                        <div className="register-input-container">
                            <i className="icon-class"><MdOutlineLock size={30} color='black'/></i>
                            <input type="password" placeholder="Confirm Password" className='register-input-box'/>
                        </div>
                        <div className='register-terms-section'>
                            <input type='checkbox' />
                            <label>I agree all terms</label>
                        </div>
                        <div>
                            <button onClick={onLogin} type='submit' className='register-btn'>Register</button>
                        </div>
                    </form>
    
                    <div className='register-brand-container'>
                        <p>Already have an account? <a href="#" onClick={onLogin}>Signin</a></p>                   
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Register