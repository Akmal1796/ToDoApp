import React from 'react'
import './Tasks.css'
import { FaRegClipboard } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";

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
      </div>

      <div className='task-status'>
        
      </div>
    </div>
  )
}

export default Tasks