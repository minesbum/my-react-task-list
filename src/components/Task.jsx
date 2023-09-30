import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

export const Task = ({ text, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(editedText);
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" />{' '}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        text
      )}{' '}
      {isEditing ? (
        <button onClick={handleSaveClick}>
          <FaSave />
        </button>
      ) : (
        <button onClick={handleEditClick}>
          <FaEdit />
        </button>
      )}{' '}
      <button onClick={onDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

