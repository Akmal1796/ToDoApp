import './App.css'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import TaskForm from './Components/TaskForm'
import Tasks from './Components/Tasks'
import VitalTask from './Components/VitalTask'

const App = () => {
  return (
    <div>
      <Nav />
      <Tasks />
      <Sidebar />
      <VitalTask />
    </div>
  )
}

export default App