import {React, useState} from 'react'
import './Sidebar.css'
import profile from '/public/Images/profile1.jpg'
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";

const Sidebar = ({ activeItem, setActiveItem, onLogout }) => {

  const menuItems = [
    { name: 'Dashboard', icon: <MdDashboard className='sidebar-icons' /> },
    { name: 'Vital Task', icon: <FaExclamation className='sidebar-icons' /> },
    { name: 'My Task', icon: <BiTask className='sidebar-icons' /> },
    { name: 'Task Categories', icon: <BsListTask className='sidebar-icons' /> },
    { name: 'Settings', icon: <IoMdSettings className='sidebar-icons' /> },
    { name: 'Help', icon: <IoMdHelpCircle className='sidebar-icons' /> },
  ];

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
                {menuItems.map(item => (
                    <li
                    key={item.name}
                    className={activeItem === item.name ? 'active' : ''}
                    onClick={() => setActiveItem(item.name)}
                    >
                    {item.icon}
                    <div>{item.name}</div>
                    </li>
                ))}
            </ul>
            <div className='logout-btn-container'>
                <MdLogout className='sidebar-icons'/>
                <div  onClick={onLogout}>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar