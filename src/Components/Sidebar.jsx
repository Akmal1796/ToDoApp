import React from 'react'
import './Sidebar.css'
import profile from '/public/Images/profile.jpg'
import { MdDashboard } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='sidebar-section'>
        <div className='profile-container'>
            <img src={profile} className='profile-img'/>
            <p>Mohamed Akmal</p>
            <p>abcd@gmail.com</p>
        </div>
        <ul className='sidebar-items'>
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
    </div>
  )
}

export default Sidebar