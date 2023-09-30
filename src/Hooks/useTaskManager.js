import { useState, useEffect } from 'react';

export function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []); // Utiliza un arreglo vacío como dependencia para ejecutar esto solo una vez al cargar la aplicación

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Crear una nueva tarea
  const createTask = (newTask) => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        name: newTask,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    }
  };

  // Eliminar una tarea específica por su índice
  const deleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  // Actualizar una tarea específica por su índice y nuevo texto
  const updateTask = (index, newText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].name = newText;
      return updatedTasks;
    });
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
}


