import { combineReducers } from 'redux';
import TaskListReducer from './reducer_task_list';


const rootReducer = combineReducers({
    lists: TaskListReducer
});

export default rootReducer;
