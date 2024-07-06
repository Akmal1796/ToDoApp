import React from 'react'
import './VitalTask.css'
import { LuPlus } from "react-icons/lu";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import UIDesign from '/public/Images/UIdesign.jpg'
import Project from '/public/Images/project.jpeg'
import { ImBin } from "react-icons/im";
import { MdNoteAlt } from "react-icons/md";

const VitalTask = () => {
  return (
    <div className='vital-tasks-container'>
      <div className='vital-todo'>
        <div>

          <div className='vital-todo-header'>
            <div className='vital-heading'>Vital Tasks</div>
            <div className='vital-underline'></div>
          </div>

          <div className='vital-todo-container'>
            <div className='vital-todo-content-header'>
              <div className='vital-todo-bullet-header'>
                <div className="vital-outer-circle">
                  <div className="vital-inner-circle"></div>
                </div>
                <h3>Complete The Landing Page UI Design</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='vital-todo-content'>
              <p>Get the work done before 4'O clock with complete responsive design</p>
              <img src={UIDesign} className='vital-todo-img'/>
            </div>
            <div className='vital-todo-status'>
              <div className='vital-status-priority'>
                <p>Priority: <span>Moderate</span></p>
              </div>
              <div className='vital-status'>
                <p>Status: <span>Not Started</span></p>
              </div>
              <div className='vital-status-date'>
                <p>Created On: 03/07/2024</p>
              </div>
            </div>
          </div>

          <div className='vital-todo-container'>
            <div className='vital-todo-content-header'>
              <div className='vital-todo-bullet-header'>
                <div className="vital-outer-circle-progress">
                  <div className="vital-inner-circle"></div>
                </div>
                <h3>Start the new project on food store</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='vital-todo-content'>
              <p>Starts the works on time because of the tight schedules for upcoming days. At least complete the requirements gatheirng within 1 week period.</p>
              <img src={Project} className='vital-todo-img'/>
            </div>
            <div className='vital-todo-status'>
              <div className='vital-status-priority'>
                <p>Priority: <span>Moderate</span></p>
              </div>
              <div className='vital-status-progress'>
                <p>Status: <span>In Progress</span></p>
              </div>
              <div className='vital-status-date'>
                <p>Created On: 03/07/2024</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='vital-completed-tasks-container'>

        <div  className='complete-header'>
          <img src={UIDesign} className='completed-img'/>
          <div className='complete-header-dsicription'>
            <h3>Completed the landing page</h3>
            <div className='complete-status'>
              <p>Priority: <span>Extreme</span></p>
              <p>Status: <span>Not Started</span></p>
            </div>
            <p className='complete-created-date'>Created on 06/07/2024</p>
          </div>
        </div>

        <div className='completion-details-container'>
        <p>Our new landing page is now live! It's designed to captivate visitors with its appealing layout and easy navigation, providing a seamless user experience.
        </p>
        <p>We focused on aligning the page with our brand and optimizing it for performance. The result is an attractive and effective entry point to our website.</p>
        <h4>Key Steps in Completing the Landing Page</h4>
        <ol>
          <li><span>Planning and Research:</span> Conducted thorough research to understand user needs and preferences, and planned the structure and content of the landing page accordingly.</li>
          <li><span>Design Mockups:</span> Created design mockups to visualize the layout, color scheme, and overall aesthetic, ensuring it aligns with our brand identity.</li>
          <li><span>Development:</span> Used HTML, CSS, and JavaScript to bring the design to life, focusing on responsiveness and cross-browser compatibility.</li>
          <li><span>Content Integration:</span> Added engaging and informative content, including text, images, and videos, to effectively communicate our message and attract visitors.</li>
          <li><span>Testing and Optimization:</span> Performed rigorous testing to identify and fix any issues, and optimized the page for fast load times and SEO to enhance user experience and visibility.  </li>
        </ol>
        </div>

        <div className='complete-icons-container'>
          <ImBin size={20} color='white' className='complete-section-icon'/>
          <MdNoteAlt size={20} color='white' className='complete-section-icon'/>
        </div>
      </div>
    </div>
  )
}

export default VitalTask