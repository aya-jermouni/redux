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
import React from 'react';

const Task = ({ task, toggleTaskStatus }) => {
  return (
    <div className={`task ${task.isDone ? 'btn-done' : 'btn-not-done'}`}>
      <span className="task-description">ID: {task.id} - Description: {task.description}</span>
      <button
        className={`btn task-button ${task.isDone ? 'btn-done' : 'btn-not-done'}`}
        onClick={() => toggleTaskStatus(task.id)}
      >
        {task.isDone ? 'Done' : 'Not Done'}
      </button>
    </div>
  );
};

export default Task;

