import React from 'react'
import './MyTasks.css'
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import documents from '/public/Images/documents.webp'
import assignment from '/public/Images/assignment.jpg'
import { ImBin } from "react-icons/im";
import { MdNoteAlt } from "react-icons/md";

const MyTasks = () => {
  return (
    <div className='vital-tasks-container'>
      <div className='vital-todo'>
        <div>

          <div className='vital-todo-header'>
            <div className='vital-heading'>My Tasks</div>
            <div className='vital-underline'></div>
          </div>

          <div className='vital-todo-container'>
            <div className='vital-todo-content-header'>
              <div className='vital-todo-bullet-header'>
                <div className="vital-outer-circle">
                  <div className="vital-inner-circle"></div>
                </div>
                <h3>Submit Documents</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='vital-todo-content'>
              <p>Make sure to submit all the necessary docments to the stakeholders.</p>
              <img src={documents} className='vital-todo-img'/>
            </div>
            <div className='vital-todo-status'>
              <div className='vital-status'>
                <p>Priority: <span>Extreme</span></p>
              </div>
              <div className='vital-status'>
                <p>Status: <span>Not Started</span></p>
              </div>
              <div className='vital-status-date'>
                <p>Created On: 05/07/2024</p>
              </div>
            </div>
          </div>

          <div className='vital-todo-container'>
            <div className='vital-todo-content-header'>
              <div className='vital-todo-bullet-header'>
                <div className="vital-outer-circle-progress">
                  <div className="vital-inner-circle"></div>
                </div>
                <h3>Comlete Assignments</h3>
              </div>
              <div><PiDotsThreeOutlineLight size={20} color='gray'/></div>
            </div>
            <div className='vital-todo-content'>
              <p>The assignment must b completed to pass the 4th semeter.</p>
              <img src={assignment} className='vital-todo-img'/>
            </div>
            <div className='vital-todo-status'>
              <div className='vital-status-priority'>
                <p>Priority: <span>Moderate</span></p>
              </div>
              <div className='vital-status-progress'>
                <p>Status: <span>In Progress</span></p>
              </div>
              <div className='vital-status-date'>
                <p>Created On: 06/07/2024</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='vital-completed-tasks-container'>

        <div  className='complete-header'>
          <img src={documents} className='completed-img'/>
          <div className='complete-header-dsicription'>
            <h3>Submit Documents</h3>
            <div className='complete-status'>
              <p>Priority: <span>Extreme</span></p>
              <p>Status: <span>Not Started</span></p>
            </div>
            <p className='complete-created-date'>Created on 05/07/2024</p>
          </div>
        </div>

        <div className='completion-details-container'>

            <div>
                <h3>Task Tite:</h3>
                <p>Document Submission</p>
            </div>

            <div>
                <h3>Objective:</h3>
                <p>To submit required documents for something important</p>
            </div>

            <div>
                <p><span>Task Description: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam laudantium saepe molestiae cum nihil provident? Laudantium voluptas modi, aspernatur accusantium, ipsum nam quisquam repellat doloribus, tempora incidunt numquam odio!</p>
            </div>

            <h3>Additional Notes:</h3>
            <ul>
                <li>Ensure that document are authentic and up-to-date.</li>
                <li>Maitain confidentiality and security of sensitive information during the submission process.</li>
                <li>If there are specific guidlines pr deadlines for submission, adhere to them diligently.</li>
            </ul>

            <div>
                <h3>Deadline for Submission:</h3>
                <p>End of Day</p>
            </div>
        </div>

        <div className='complete-icons-container'>
          <ImBin size={20} color='white' className='complete-section-icon'/>
          <MdNoteAlt size={20} color='white' className='complete-section-icon'/>
        </div>
      </div>
    </div>
  )
}

export default MyTasks