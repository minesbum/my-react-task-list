import React from 'react';
import { Task } from './Task';

export const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              text={task.name} // Asegúrate de pasar el texto de la tarea
              onDelete={() => onDelete(index)}
              onUpdate={(newText) => onUpdate(index, newText)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
