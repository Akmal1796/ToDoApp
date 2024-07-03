import React from 'react'
import './Tasks.css'
import { FaRegClipboard } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const Tasks = () => {
  return (
    <div className='tasks-container'>

      <div className='todo'>

        <div className='todo-header'>

          <div className='todo-header-left-section'>
            <div className='header-left'><FaRegClipboard size={25} color='gray'/>
            <span> To-Do</span></div>
            <div className='header-date'>03 July <span> ·Today</span></div>
          </div>

          <div className='todo-header-right-section'>
            <div className='header-right'><LuPlus size={18} className='plus-icon'/><span> Add Task</span></div>
          </div>

        </div>

        <div className='todo-container'>
          <div className='todo-header'>
            <h3>Complete The Landing Page UI Design</h3>
            <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
          </div>
          <div className='todo-content'>
            <p>Get the work done before 4'O clock with complete responsive design</p>
          </div>
          <div className='todo-status'>
            <div>
              <p>Priority: <span>Moderate</span></p>
            </div>
            <div>
              <p>Status: <span>Not Started</span></p>
            </div>
            <div>
              <p>Created On: <span>03/07/2024</span></p>
            </div>
          </div>
        </div>

      </div>

      <div className='task-status'>
        
      </div>
    </div>
  )
}

export default Tasks