// import React from 'react';

// const Task = ({ task, onToggle }) => {
//   const { description, isDone } = task;

//   return (
//     <li>
//       <input type="checkbox" checked={isDone} onChange={onToggle} />
//       {description}
//     </li>
//   );
// };

// export default Task;
// Task.js
import React, { useState } from 'react';

const Task = ({ task, toggleTaskStatus, editTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedDescription);
    setEditMode(false);
  };

  return (
    <div className={`task ${task.isDone ? 'btn-done' : 'btn-not-done'}`}>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button className="btn task-button" onClick={handleSaveClick}>
            Save
          </button>
        </>
      ) : (
        <>
          <span className="task-description">ID: {task.id} - Description: {task.description}</span>
          <button
            className="btn task-button"
            onClick={() => toggleTaskStatus(task.id)}
          >
            {task.isDone ? 'Done' : 'Not Done'}
          </button>
          <button className="btn task-button" onClick={handleEditClick}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
