import React from 'react'
import './VitalTask.css'
import { LuPlus } from "react-icons/lu";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import UIDesign from '/public/Images/UIdesign.jpg'
import Project from '/public/Images/project.jpeg'
import webdevelopment from '/public/Images/webDevelopment.jpg'
import { LuClipboardCheck } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { PiChartPieSliceFill } from "react-icons/pi";

const VitalTask = () => {
  return (
    <div className='tasks-container'>
      <div className='todo'>
        <div>

          <div className='todo-header'>
            <div className='heading'>Vital Tasks</div>
            <div className='underline'></div>
          </div>

          <div className='todo-container'>
            <div className='todo-content-header'>
              <div className='todo-bullet-header'>
                <div className="outer-circle">
                  <div className="inner-circle"></div>
                </div>
                <h3>Complete The Landing Page UI Design</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='todo-content'>
              <p>Get the work done before 4'O clock with complete responsive design</p>
              <img src={UIDesign} className='todo-img'/>
            </div>
            <div className='todo-status'>
              <div className='status-priority'>
                <p>Priority: <span>Moderate</span></p>
              </div>
              <div className='status'>
                <p>Status: <span>Not Started</span></p>
              </div>
              <div className='status-date'>
                <p>Created On: 03/07/2024</p>
              </div>
            </div>
          </div>

          <div className='todo-container'>
            <div className='todo-content-header'>
              <div className='todo-bullet-header'>
                <div className="outer-circle-progress">
                  <div className="inner-circle"></div>
                </div>
                <h3>Start the new project on food store</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='todo-content'>
              <p>Starts the works on time because of the tight schedules for upcoming days. At least complete the requirements gatheirng within 1 week period.</p>
              <img src={Project} className='todo-img'/>
            </div>
            <div className='todo-status'>
              <div className='status-priority'>
                <p>Priority: <span>Moderate</span></p>
              </div>
              <div className='status-progress'>
                <p>Status: <span>In Progress</span></p>
              </div>
              <div className='status-date'>
                <p>Created On: 03/07/2024</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='completed-tasks-container'>
      </div>
    </div>
  )
}

export default VitalTask