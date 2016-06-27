import { ADD_LIST, LIST_NAME, SELECT_LIST, DELETE_LIST, ADD_TASK, TASK_NAME, DELETE_TASK } from '../actions/index';

const initialState = {
  list: '',
  task:'',
  activeLists: [],
  currentList: 0,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case LIST_NAME:
            return Object.assign({}, state, {
                list: action.list
            });
        case ADD_LIST:
            let currentList = state.activeLists.length;
            return Object.assign({}, state, {
                currentList: currentList,
                activeLists: [
                    ...state.activeLists,
                    {
                        list: action.list,
                        tasks: []
                    }
                ]
            });
        case SELECT_LIST:
            return Object.assign({}, state, {
                currentList: action.index
            });
        case DELETE_LIST:
            let deleteCopy = Object.assign([], state.activeLists);
            deleteCopy = [
                ...deleteCopy.slice(0, action.listIndex),
                ...deleteCopy.slice(action.listIndex + 1)
            ]
            return Object.assign({}, state, {
                activeLists: deleteCopy,
                currentList: 0 // resets the selectedList counter
            });
        case TASK_NAME:
            return Object.assign({}, state, {
                task: action.task
            });
        case ADD_TASK:
            let copy = Object.assign([], state.activeLists);
            // find the matching item that corresponds to the list being edited
            copy.forEach((o) => {
                if(o.list === action.list) {
                    o.tasks.push({
                        task: action.task,
                        completed: false
                    })
                }
            });

            return Object.assign({}, state, {
                activeLists: copy
            });

        case DELETE_TASK:
        // TODO: Try doing this with reduce. Tomorrow problem
            let dupe = Object.assign([], state.activeLists);

            dupe.forEach((o, index) => {
                if(index === action.listIndex) {
                    o.tasks = [
                        ...o.tasks.slice(0, action.taskIndex),
                        ...o.tasks.slice(action.taskIndex + 1)
                    ]
                }
            });
            return Object.assign({}, state, {
                activeLists: dupe
            });
    }
    return state;
}
