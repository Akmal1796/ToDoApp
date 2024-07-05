import './App.css'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import TaskForm from './Components/TaskForm'
import Tasks from './Components/Tasks'

const App = () => {
  return (
    <div>
      <Nav />
      <Tasks />
      <Sidebar />
    </div>
  )
}

export default App