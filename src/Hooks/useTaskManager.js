import { useState, useEffect } from 'react';

export function useTaskManager() {
  const [tasks, setTasks] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  // Cargar tareas desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []); // Utiliza un arreglo vacío como dependencia para ejecutar esto solo una vez al cargar la aplicación
  
  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Crear una nueva tarea con validación
  const createTask = (newTask) => {
    if (newTask.name.trim().length < 3) {
      setFormErrors({ name: 'debe tener al menos 3 caracteres' });
      return;
    }
  
    setFormErrors({}); // Limpiar los errores si no hay errores en la nueva tarea
  
    const newTaskObject = {
      name: newTask.name,
      description: newTask.description || '', // Establecer descripción como cadena vacía si no se proporciona
      completed: false,
    };
  
    // Actualiza el estado de las tareas
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTaskObject];
      // Guarda las tareas actualizadas en el localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  // Marcar una tarea como completada
  const completeTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = true;
      return updatedTasks;
    });
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
    completeTask, // Agregamos esta función para marcar tareas como completadas
    deleteTask,
    updateTask,
    formErrors,
  };
}