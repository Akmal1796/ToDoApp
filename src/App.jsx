import './App.css'
import { useState } from 'react'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import TaskForm from './Components/TaskForm'
import Tasks from './Components/Tasks'
import VitalTask from './Components/VitalTask'
import MyTasks from './Components/MyTasks'

const App = () => {

  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div>
      <Nav />
      {activeItem === 'Dashboard' && <Tasks />}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      {activeItem === 'Vital Task' && <VitalTask />}
      {activeItem === 'My Task' && <MyTasks />}
    </div>
  )
}

export default App