import './App.css'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import TaskForm from './Components/TaskForm'
import Tasks from './Components/Tasks'
import VitalTask from './Components/VitalTask'
import MyTasks from './Components/MyTasks'

const App = () => {
  return (
    <div>
      <Nav />
      <Tasks />
      <Sidebar />
      <VitalTask />
      <MyTasks />
    </div>
  )
}

export default App