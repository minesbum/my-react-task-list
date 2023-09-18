import React from 'react';
import { Task } from './Task';
export const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task task={task} onDelete={() => onDelete(index)} /> {/* Pasamos la tarea como prop */}
          </li>
        ))}
      </ul>
    </div>
  );
};