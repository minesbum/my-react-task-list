import Header from "./components/Header"
import { TaskList } from "./components/TaskList"
import React, { useState, useEffect } from 'react';
import './App.css';

const initialTasks = [
  { name: 'Hacer la compra', completed: false },
  { name: 'Lavar el coche', completed: true },
  { name: 'Leer un libro', completed: false },
];


function App() {
 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Cargar tareas desde localStorage al cargar la aplicación
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(storedTasks);
}, []);

   // Guardar tareas en localStorage cada vez que cambien
   useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

    //Agregar una nueva tarea a la lista de tareas cuando el usuario hace clic en un botón o presiona una tecla
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

    //Elimina una tarea específica de la lista de tareas cuando el usuario hace clic en el botón de eliminación correspondiente
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header />

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Add your new todo"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      <div>
        <h3>You have {tasks.length} pending task(s)</h3>
      </div>
    </div>
  );
}

export default App 