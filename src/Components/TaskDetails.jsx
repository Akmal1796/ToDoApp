import {React, useState} from 'react'
import './TaskDetails.css'
import { FaRegClipboard } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import UIDesign from '/public/Images/UIdesign.jpg'
import Project from '/public/Images/project.jpeg'
import webdevelopment from '/public/Images/webDevelopment.jpg'
import { ImBin } from "react-icons/im";
import { MdNoteAlt } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";

const TaskDetails = () => {

    const [progress1, setProgress1] = useState(84);
    const [progress2, setProgress2] = useState(46);
    const [progress3, setProgress3] = useState(13);
  
    const [isFormOpen, setForm] = useState(false);
  
    function toggleForm() {
        setForm(prevState => !prevState);
    }
  
    const [isMenuShowing, setMenu] = useState(false);
  
    function toggleMenu() {
      setMenu(prevState => !prevState);
    }
  
    return (
        <div className='all-task-section-container'>
          <div className='tasks-container'>
          <div className='todo'>
              <div className='task-top-section-container'>
                <div className='task-top-section'>
                  <div>
                    <img src={webdevelopment} className='task-image'/>
                  </div>
                  <div className='task-details-container'>
                    <h2>Complete Development Process</h2>
                    <p>Priority: <span className='moderate-section'>Moderate</span></p>
                    <p>Status: <span className='not-started'>Not Started</span></p>
                    <p className='date-section'>Created on: 07.07.2024</p>
                  </div>
                </div>
                <div><p className='task-goback-button'>Go Back</p></div>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque sed rem voluptatibus, repudiandae similique impedit voluptas saepe maiores, iusto corporis magnam ratione velit beatae, facilis aut odit nam. Delectus?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda laboriosam asperiores iusto minima officiis officia ea voluptatum saepe omnis rem, quasi exercitationem delectus, eaque sed. Soluta natus nisi nam sequi.</p>
              </div>
              <div>
                <ImBin size={30}/>
                <MdNoteAlt size={30}/>
                <FaExclamation size={30}/>
              </div>
          </div>
          </div>
        </div>
      )
}

export default TaskDetails