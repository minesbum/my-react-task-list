import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

export const Task = ({ text, onDelete, onUpdate, onComplete }) => {
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
    onDelete(); // Llama a onDelete cuando se hace clic en el botón de eliminación
  };

  return (
    <div>
      <input className='chebox' type="checkbox"  onChange={handleCheckboxChange} />
      <span className={`task-text ${isEditing ? 'editing' : ''}`}>
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
      {isEditing ?(
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
  );
};