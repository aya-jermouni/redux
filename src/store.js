import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({todo: todoReducer});

const store = createStore(rootReducer);

export default store ;
