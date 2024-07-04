import React from 'react'
import './TaskForm.css'

const TaskForm = () => {
  return (
    <div>
        <div className='form-header'>
            <p>Add New Task</p>
            <p>Go Back</p>
        </div>
        <div className='form-content'>
            <form>
                <label>Title</label>
                <input type='text'/>

                <label>Start Date</label>
                <input type='date'/>

                <label>Due Date</label>
                <input type='date'/>

                <label htmlFor='priority'>Priority</label>
                <input type='radio' name='priority' />Extreme
                <input type='radio' name='priority'/>Moderate
                <input type='radio' name='priority'/>Low

                <label>Task Description</label>
                <textarea />

                <label>Upload Image</label>
                <input type='file'/>
            </form>
        </div>
        <div></div>
    </div>
  )
}

export default TaskForm