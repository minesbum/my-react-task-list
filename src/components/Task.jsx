import { FaTrash, FaEdit } from 'react-icons/fa';

export const Task = ({ text, onDelete }) => {
  return (
    <div>
      <input type="checkbox" /> {text}{' '}
      <button onClick={onDelete}>
        <FaTrash />
      </button>
      <span><button type="submit">
        <FaEdit/>
            </button>
        </span>
      
    </div>
  );
};
