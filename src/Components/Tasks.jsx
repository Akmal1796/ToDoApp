import {React, useState} from 'react'
import './Tasks.css'
import { FaRegClipboard } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import UIDesign from '/public/Images/UIdesign.jpg'
import Project from '/public/Images/project.jpeg'
import webdevelopment from '/public/Images/webDevelopment.jpg'
import { LuClipboardCheck } from "react-icons/lu";
import ProgressBar from './ProgressBar';

const Tasks = () => {

  const [progress1, setProgress1] = useState(84);
  const [progress2, setProgress2] = useState(46);
  const [progress3, setProgress3] = useState(13);

  return (
    <div className='tasks-container'>

      <div className='todo'>
        <div>

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
            <div className='todo-content-header'>
              <div className='todo-bullet-header'>
                <div class="outer-circle">
                  <div class="inner-circle"></div>
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
                <div class="outer-circle-progress">
                  <div class="inner-circle"></div>
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
        <div className='old-container'>
          <div className='todo-container old'>
            <div className='todo-content-header'>
              <div className='todo-bullet-header'>
                <div class="outer-circle-progress">
                  <div class="inner-circle"></div>
                </div>
                <h3>Completing the development process</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='todo-content'>
              <p>Continue the works on the development process of the portfolio website and complete all the remaining dvelopment works and move on to the testing phase of the development lifecycle.</p>
              <img src={webdevelopment} className='todo-img'/>
            </div>
            <div className='todo-status'>
              <div className='status-priority'>
                <p>Priority: <span>Moderate</span></p>
              </div>
              <div className='status-progress'>
                <p>Status: <span>In Progress</span></p>
              </div>
              <div className='status-date'>
                <p>Created On: 01/07/2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='task-status'>

        <div className='progress-bar-container'>
          <di className="progress-bar-header">
            <div>
              <LuClipboardCheck size={30} color='gray'/><span>Task Status</span>
            </div>
          </di>
          <div className='progress-bars'>
            <div>
              <ProgressBar progress={progress1} color='rgb(9, 204, 70)'/>
            </div>
            <div>
              <ProgressBar progress={progress2} color='blue' />
            </div>
            <div>
              <ProgressBar progress={progress3} color='red' />
            </div>
          </div>
          <div className='prograss-bar-tip-container'>
            <div className='prograss-bar-tip'><span className='complete-bar'></span>Completed</div>
            <div className='prograss-bar-tip'><span className='inprogess-bar'></span>In Progress</div>
            <div className='prograss-bar-tip'><span className='notstarted-bar'></span>Not Started</div>
          </div>
        </div>

        <div className='completed-task-container'>
        <div className='todo-container'>
            <div className='todo-content-header'>
              <div className='todo-bullet-header'>
                <div class="outer-circle">
                  <div class="inner-circle"></div>
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
        </div>

      </div>
    </div>
  )
}

export default Tasks