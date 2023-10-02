import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { TaskList } from './components/TaskList';
import { useTaskManager } from './Hooks/useTaskManager';

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    createTask(newTask);
    setNewTask('');
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

      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      <div>
        <h3>You have {tasks.length} pending task(s)</h3>
      </div>
    </div>
  );
};

export default App;

