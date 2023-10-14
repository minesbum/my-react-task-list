import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import { TaskList } from './components/TaskList';
import { useTaskManager } from './Hooks/useTaskManager';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, Input, Button, Heading, Spinner } from "@chakra-ui/react";



const Home = lazy(()=> import("./Pages/Home"))
const SobreNosotros = lazy(()=> import("./Pages/SobreNosotros"))
const Tareas = lazy(()=> import("./Pages/Tareas"))

function App() {
  const { tasks, createTask, deleteTask, updateTask, completeTask, formErrors } = useTaskManager();
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [pendingTasksCount, setPendingTasksCount] = useState(0);

  const handleAddTask = (e) => {
    e.preventDefault();

    // Validación del nombre de la tarea
    if (newTaskName.length < 3) {
      return; // No crear la tarea si hay errores de validación
    }

    const newTask = {
      name: newTaskName,
      description: newTaskDescription,
    };

    createTask(newTask);
    setNewTaskName('');
    setNewTaskDescription('');
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setNewTaskName(newName);

    // Validación en tiempo real del nombre de la tarea
    if (newName.length < 3) {
      formErrors.name = 'Task is short';
    } else {
      formErrors.name = 'Task is required';
    }
  };

  useEffect(() => {
    const pendingCount = tasks.filter((task) => !task.completed).length;
    setPendingTasksCount(pendingCount);
  }, [tasks]);

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Menu />
        <Suspense fallback={<Spinner size="xl" />}>
          <Routes>
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>

        <Header />
        <Box as="form" onSubmit={handleAddTask} mb={4}>
          <Input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="New Task"
            value={newTaskName}
            onChange={handleNameChange}
            isInvalid={formErrors.name && newTaskName.length < 3}
          />
          <Input
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Description (optional)"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <Button type="submit" colorScheme="teal" mt={2}>
            Add Task
          </Button>
        </Box>

        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} onComplete={completeTask} />
        <Heading as="h3" size="md" mt={4}>
          You have {pendingTasksCount} Task(s) pending(s)
        </Heading>
      </Router>
    </ChakraProvider>
  );
}
export default App;