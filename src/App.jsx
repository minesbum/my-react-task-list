import Header from "./components/Header"
import { TaskList } from "./components/TaskList"
import './App.css';

function App() {
  return (
    <div>

      <Header/>

      <input type="text" name="description" autoComplete="off" placeholder="Add you new todo"/> 
      <button type="submit">Agregar</button>
      
      <TaskList/>
      <div>
        <h3>You have 2 pending task</h3>
      </div>

    </div>
  )
}

export default App
