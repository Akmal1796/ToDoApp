import React from 'react'
import './TaskForm.css'

const TaskForm = () => {
  return (
    <div className='form-container'>
        <div className='form-header'>
            <div className='form-header-left'>Add New Task</div>
            <div className='form-header-right'>Go Back</div>
        </div>
        <div className='form-content'>
            <form>
                <div className='task-title'>
                    <label>Title</label>
                    <input type='text' className='input-box' placeholder='Start the project...'/>
                </div>

                <div className='task-date'>
                    <label>Start Date</label>
                    <input type='date' className='input-box'/>
                </div>

                <div className='task-date'>
                    <label>Due Date</label>
                    <input type='date' className='input-box'/>
                </div>

                <div className='task-priority'>
                    <label htmlFor='priority'>Priority</label>
                    <div>
                        Extreme<input type='radio' name='priority' className='radio-bullet' />
                        Moderate<input type='radio' name='priority' className='radio-bullet'/>
                        Low<input type='radio' name='priority' className='radio-bullet'/>
                    </div>
                </div>

                <div className='task-description-container'>
                    <div className='task-description'>
                        <label>Task Description</label>
                        <textarea cols={45} rows={8}/>
                    </div>

                    <div className='task-image-container'>
                        <label>Upload Image</label>
                        <input type='file'/>
                    </div>
                </div>
            </form>
        </div>
        <div></div>
    </div>
  )
}

export default TaskForm