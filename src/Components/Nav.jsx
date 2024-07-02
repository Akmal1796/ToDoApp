import React from 'react'
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
    <div>
        <div className='left-section'><span>Dash</span>board</div>
        <div className='middle-section'>
            <input type='text' placeholder='Search your tasks here...'/>
            <FaSearch size={20} />
        </div>
        <div className='right-section'>
            <FaBell size={20}/>
            <FaCalendar size={20}/>
            <input type='date' />
            {dayName}
            {day}/{month}/{d.getFullYear()}
        </div>
    </div>
  )
}

export default Nav