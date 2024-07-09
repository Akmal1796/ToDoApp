import './App.css'
import { useState } from 'react'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import TaskForm from './Components/TaskForm'
import Tasks from './Components/Tasks'
import VitalTask from './Components/VitalTask'
import MyTasks from './Components/MyTasks'
import Login from './Components/Login'
import Register from './Components/Register'
import TaskDetails from './Components/TaskDetails'

const App = () => {

  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
{/*       <TaskDetails />
      <Register />
      <Login /> 
      <Nav />
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      {activeItem === 'Dashboard' && <Tasks />}
      {activeItem === 'Vital Task' && <VitalTask />}
      {activeItem === 'My Task' && <MyTasks />}*/}

      {isAuthenticated ? (
        <>
          <Nav />
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} onLogout={handleLogout} />
          {activeItem === 'Dashboard' && <Tasks />}
          {activeItem === 'Vital Task' && <VitalTask />}
          {activeItem === 'My Task' && <MyTasks />}
        </>
      ) : (
        <Login />
      )}

    </div>
  )
}

export default App