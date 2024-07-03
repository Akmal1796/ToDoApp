import React from 'react'
import './Sidebar.css'
import profile from '/public/Images/profile.jpg'
import { MdDashboard } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='sidebar-section'>
        <div className='profile-container'>
            <img src={profile} className='profile-img'/>
            <div className='profile-detail'>
                <p className='name'>Mohamed Akmal</p>
                <p>abcd@gmail.com</p>
            </div>
        </div>
        <div className='sidebar-container'>
            <ul className='sidebar-menu-items'>
                <li className='active'>
                    <MdDashboard className='sidebar-icons'/>
                    <div>Dashboard</div>
                </li>
                <li>
                    <FaExclamation className='sidebar-icons'/>
                    <div>Vital Task</div>
                </li>
                <li>
                    <BiTask className='sidebar-icons'/>
                    <div>My Task</div>
                </li>
                <li>
                    <BsListTask className='sidebar-icons'/>
                    <div>Task Categories</div>
                </li>
                <li>
                    <IoMdSettings className='sidebar-icons'/>
                    <div>Settings</div>
                </li>
                <li>
                    <IoMdHelpCircle className='sidebar-icons'/>
                    <div>Help</div>
                </li>
            </ul>
            <div className='logout-btn-container'>
                <MdLogout className='sidebar-icons'/>
                <div>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar