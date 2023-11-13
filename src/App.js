// import React from 'react';
// import './App.css';
// import AddTask from './components/AddTask';
// import ListTask from './components/ListTask';
// import { Provider } from 'react-redux';
// import store from './store';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>ToDo App</h1>
//         <AddTask />
//         <ListTask />
//       </div>
//     </Provider>
//   );
// };

// export default App;
// App.js
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterDone, setFilterDone] = useState('all'); // 'all', 'done', 'not-done'

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const editTask = (taskId, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  };

  const filterTasks = (task) => {
    if (filterDone === 'all') return true;
    return task.isDone === (filterDone === 'done');
  };

  return (
    <div className="container mt-5">
      <div className="form-container">
        <AddTask addTask={addTask} />
      </div>
      <div className="mb-3">
        <label className="form-label">Filter by status:</label>
        <select
          className="form-select"
          value={filterDone}
          onChange={(e) => setFilterDone(e.target.value)}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="not-done">Not Done</option>
        </select>
      </div>
      <ListTask tasks={tasks.filter(filterTasks)} toggleTaskStatus={toggleTaskStatus} editTask={editTask} />
    </div>
  );
};

export default App;


