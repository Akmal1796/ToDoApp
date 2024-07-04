import {React, useState} from 'react'
import './Nav.css'
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidShare } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";

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

    const messages = [
        {id: 1, title: "Complete the UI design for Landing page for FoodVentures", time: "2h", img: "", priority: "High"},
        {id: 2, title: "Complete the entire design for Juice Slider", time: "4h", img: "", priority: "High"}
    ]

    const [dayNight, setDayNight] = useState(true);
  
    function toggleChangeLight() {
        setDayNight(prevState => !prevState);
    }

  return (
    <div   className={dayNight ? 'nav-section day-mode' : 'nav-section night-mode'}>

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
                <div className='daynight-toggle' onClick={toggleChangeLight}>
                    {dayNight == true ? <FaMoon size={20} color='wheat'/> : <FaSun size={20} color='yellow' />}
                </div>
                <div className='icons' onClick={toggleNotification}><FaRegBell size={20} color='white'/></div>
                    {isNotificationPanelOpen && (
                    <div className='notification-panel'>
                        <div className='notification-header'>
                            <h3>Notifications</h3>
                            <BiSolidShare size={20} color='#FF6767' onClick={toggleNotification} className='notification-back-icon'/>
                        </div>
                        {messages.length > 0 ? (
                        messages.map(message => (
                            <div key={message.id} className='notification-message'>
                            <div className='msg-title-container'>
                                <div>
                                    <strong>{message.title}</strong>
                                </div>
                                <div className='msg-time'>{message.time}</div>
                            </div>
                            {message.img && <img src={message.img} alt="Notification" />}
                            <div>Priority: <span className='priority'>{message.priority}</span></div>
                            </div>
                        ))
                        ) : (
                        <p>No new notifications</p>
                        )}
                    </div>
                    )}
                <div className='icons'><MdOutlineDateRange size={20} color='white' /></div>
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