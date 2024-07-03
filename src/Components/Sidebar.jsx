import React from 'react'
import './Sidebar.css'
import profile from '/public/Images/profile.jpg'

const Sidebar = () => {
  return (
    <div>
        <div>
            <img src={profile} className='profile-img'/>
            <p>Mohamed Akmal</p>
            <p>abcd@gmail.com</p>
        </div>
        <ul>
            <li>Dashboard</li>
            <li>Vital Task</li>
            <li>My Task</li>
            <li>Task Categories</li>
            <li>Settings</li>
            <li>Help</li>
        </ul>
    </div>
  )
}

export default Sidebar