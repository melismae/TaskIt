import { combineReducers } from 'redux';
import TaskListReducer from './reducer_task_list';
import FilterReducer from './reducer_filter';

const rootReducer = combineReducers({
    lists: TaskListReducer,
    filter: FilterReducer
});

export default rootReducer;
