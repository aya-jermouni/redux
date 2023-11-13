// import React, { useSelector } from 'react';
// import Task from './Task';

// const App = () => {
//   const tasks = useSelector((state) => state.todo.tasks);

//   return (
//     <ListTask tasks={tasks} />
//   );
// };

/*new version of this ListeTask */

import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, toggleTaskStatus }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
      ))}
    </div>
  );
};

export default ListTask;

