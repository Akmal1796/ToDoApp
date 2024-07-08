import {React, useState} from 'react'
import './TaskDetails.css'
import { FaRegClipboard } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import UIDesign from '/public/Images/UIdesign.jpg'
import Project from '/public/Images/project.jpeg'
import webdevelopment from '/public/Images/webDevelopment.jpg'
import { LuClipboardCheck } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { PiChartPieSliceFill } from "react-icons/pi";
import ProgressBar from './ProgressBar';
import TaskForm from './TaskForm';

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
                
          </div>
          </div>
        </div>
      )
}

export default TaskDetails