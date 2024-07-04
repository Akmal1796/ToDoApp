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
                <div>
                    <label>Title</label>
                    <input type='text'/>
                </div>

                <div>
                    <label>Start Date</label>
                    <input type='date'/>
                </div>

                <div>
                    <label>Due Date</label>
                    <input type='date'/>
                </div>

                <div>
                    <label htmlFor='priority'>Priority</label>
                    <div>
                        <input type='radio' name='priority' />Extreme
                        <input type='radio' name='priority'/>Moderate
                        <input type='radio' name='priority'/>Low
                    </div>
                </div>

                <div>
                    <label>Task Description</label>
                    <textarea />

                    <label>Upload Image</label>
                    <input type='file'/>
                </div>
            </form>
        </div>
        <div></div>
    </div>
  )
}

export default TaskForm