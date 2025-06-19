import React from 'react';

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="action-buttons">
      <button 
        className="btn btn-edit" 
        onClick={onEdit}  
      >
        Edit
      </button>
      <button 
        className="btn btn-delete" 
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ActionButtons;
