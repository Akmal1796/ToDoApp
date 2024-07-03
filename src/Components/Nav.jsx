import React from 'react'
import './Nav.css'
import { FaBell, FaCalendar, FaSearch } from 'react-icons/fa';

const Nav = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let monthName = months[d.getMonth()];
    let dayName = days[d.getDay()];

    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

  return (
    <div  className='nav-section'>

        <div className='left-section'>
            <div className='brand-name'><span className='brand-name-highlight'>Dash</span>board</div>
        </div>

        <div className='middle-section'>
            <div className='search-box-container'>
                <input type='text' placeholder='Search your tasks here...' className='search-box'/>
                <div className='search-icon'><FaSearch size={20} color='white' /></div>
            </div>
        </div>

        <div className='right-section'>
            <div className='icon-container'>
                <div className='icons'><FaBell size={20} color='white' /></div>
                <div className='icons'><FaCalendar size={20} color='white' /></div>
            </div>
            <div className='date-container'>
                <div>{dayName}</div>
                <div className='date'>{day}/{month}/{d.getFullYear()}</div>
            </div>
        </div>
    </div>
  )
}

export default Nav