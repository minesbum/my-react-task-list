import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

export const Task = ({ text, description, completed, onDelete, onUpdate, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(editedText);
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    onComplete();
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <input className='chebox' type="checkbox" onChange={handleCheckboxChange} checked={completed} />
        <span className={`task-text ${isEditing ? 'editing' : ''} ${completed ? 'completed-text' : ''}`}>
          {isEditing ? (
            <input 
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            text
          )}
        </span>
        {isEditing ? (
          <button className='save' onClick={handleSaveClick}>
            <FaSave />
          </button>
        ) : (
          <button className='edit' onClick={handleEditClick}>
            <FaEdit />
          </button>
        )}
        <button className='trash' onClick={handleDeleteClick}>
          <FaTrash />
        </button>
      </div>
      {description && (
        <p className="task-description">
          <strong>Description:</strong> {description}
        </p>
      )}
    </div>
  );
};


