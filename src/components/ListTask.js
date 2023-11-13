// import React, { useSelector } from 'react';
// import Task from './Task';

// const App = () => {
//   const tasks = useSelector((state) => state.todo.tasks);

//   return (
//     <ListTask tasks={tasks} />
//   );
// };

/*new version of this ListeTask */

// ListTask.js
import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, toggleTaskStatus, editTask }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default ListTask;
