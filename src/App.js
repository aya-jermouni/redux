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

  return (
    <div className="container mt-5">
      <div className="form-container">
        <AddTask addTask={addTask} />
      </div>
      <ListTask tasks={tasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
};

export default App;


