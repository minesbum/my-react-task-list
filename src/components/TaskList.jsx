import React from 'react';
import { Task } from './Task';

export const TaskList = ({ tasks, onDelete, onUpdate, onComplete }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              text={task.name}
              description={task.description}
              completed={task.completed}
              onDelete={() => onDelete(index)}
              onUpdate={(newText) => onUpdate(index, newText)}
              onComplete={() => onComplete(index)} // Pasa onComplete aquí
            />
          </li>
        ))}
      </ul>
    </div>
  );
};