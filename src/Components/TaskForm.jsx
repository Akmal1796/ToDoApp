import React from 'react'
import './TaskForm.css'

const TaskForm = ({ isFormOpen, toggleForm }) => {
  return (
    <div className= "form-container">
        <div className='form-header'>
            <div className='form-header-left'>Add New Task</div>
            <div className='form-header-right' onClick={toggleForm}>Go Back</div>
        </div>
        <div className='form-content'>
            <form>
                <div className='task-title'>
                    <label>Title</label>
                    <input type='text' className='input-box' placeholder='Start the project...'/>
                </div>

                <div className='task-date-container'>
                    <div className='task-date'>
                        <label>Start Date</label>
                        <input type='date' className='input-box'/>
                    </div>

                    <div className='task-date'>
                        <label>Due Date</label>
                        <input type='date' className='input-box'/>
                    </div>
                </div>

                <div className='task-priority'>
                    <label htmlFor='priority'>Priority</label>
                    <div>
                        <span className='priority-color-palatte extreme'></span>Extreme<input type='radio' name='priority' className='radio-bullet' />
                        <span className='priority-color-palatte moderate'></span>Moderate<input type='radio' name='priority' className='radio-bullet'/>
                        <span className='priority-color-palatte low'></span>Low<input type='radio' name='priority' className='radio-bullet'/>
                    </div>
                </div>

                <div className='task-description-container'>
                    <div className='task-description'>
                        <label>Task Description</label>
                        <textarea cols={40} rows={10} className='text-area' placeholder='Start write here...'/>
                    </div>

                    <div className='task-image-container'>
                        <label>Upload Image</label>
                        <label for="images" class="drop-container" id="dropcontainer">
                            <span class="drop-title">Drop image here</span>
                            or
                            <input type="file" id="images" accept="image/*" required />
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <button type='submit' className='submit-btn'>Done</button>
        </div>
    </div>
  )
}

export default TaskForm