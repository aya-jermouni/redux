import { ADD_TASK, TOGGLE_TASK } from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: action.payload.id,
          description: action.payload.description,
          isDone: false,
        }],
      };
    case TOGGLE_TASK:
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
}