// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../actions/todoActions';

// const AddTask = () => {
//   const [description, setDescription] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addTask({ description }));
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;
import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      addTask({ description, isDone: false });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
