import {React, useState} from 'react'
import './Nav.css'
import { FaBell, FaCalendar, FaSearch } from 'react-icons/fa';
import { BiSolidShare } from "react-icons/bi";

const Nav = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let monthName = months[d.getMonth()];
    let dayName = days[d.getDay()];

    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

    const toggleNotification = () => {
      setIsNotificationPanelOpen(prevState => !prevState);
    };

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
                <div className='icons'><FaBell size={20} color='white' onClick={toggleNotification}/></div>
                    {isNotificationPanelOpen && (
                    <div className='notification-panel'>
                        {/* Your notification content goes here */}
                            <div>
                                <div className='notfication-header'>
                                    <h3>Notifications</h3>
                                    <BiSolidShare size={20} color='#FF6767' onClick={toggleNotification} className='notification-back-icon'/>
                                </div>
                                <p>No new notifications</p>
                            </div>
                    </div>
                    )}
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