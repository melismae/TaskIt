import {
    ADD_LIST,
    LIST_NAME,
    SELECT_LIST,
    DELETE_LIST,
    ADD_TASK,
    SAVE_EDITED_TASK,
    EDIT_TASK,
    TASK_NAME,
    COMPLETE_TASK,
    DELETE_TASK } from '../actions/index';

const initialState = {
  list: '',
  task:'',
  activeLists: [],
  currentList: 0,
}

const taskId = 0;

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
            // console.log(copy.activeLists[action.listIndex].tasks.length);
            const taskId = copy[action.listIndex].tasks.length + 1;
            // find the matching item that corresponds to the list being edited
            copy.forEach((o) => {
                if(o.list === action.list) {
                    o.tasks.push({
                        task: action.task,
                        completed: false,
                        editing: false,
                        taskId: taskId
                    })
                }
            });

            return Object.assign({}, state, {
                activeLists: copy
            });
        case EDIT_TASK:
            let toggleCopy = Object.assign([], state.activeLists);
            // find the matching item that corresponds to the list being edited
            toggleCopy.forEach((o, index) => {
                if(index === action.listIndex) {
                    o.tasks.find((x) => {
                        if(x.taskId === action.taskId) {
                            x.editing = true;
                        }
                    });
                }
            });
            return Object.assign({}, state, {
                activeLists: toggleCopy
            });
        case SAVE_EDITED_TASK:
            let editedCopy = Object.assign([], state.activeLists);
            // find the matching item that corresponds to the list being edited
            editedCopy.forEach((o, index) => {
                if(index === action.listIndex) {
                    o.tasks.find((x) => {
                        if(x.taskId === action.taskId) {
                            console.log("here")
                            x.task = action.task;
                            x.editing = false;
                        }
                    });
                }
            });

            return Object.assign({}, state, {
                activeLists: editedCopy
            });
        case COMPLETE_TASK:
            let completeCopy = Object.assign([], state.activeLists);
            // find the matching item that corresponds to the list being edited
            completeCopy.forEach((o, index) => {
                if(index === action.listIndex) {
                    o.tasks.find((x) => {
                        if(x.taskId === action.taskId) {
                            x.completed = !x.completed;
                        }
                    });
                }
            });
            return Object.assign({}, state, {
                activeLists: completeCopy
            });
        case DELETE_TASK:
        // TODO: Try doing this with reduce. Tomorrow problem
            let dupe = Object.assign([], state.activeLists);

            dupe.forEach((o, index) => {
                if(index === action.listIndex) {
                    if(index === action.listIndex) {
                        o.tasks.find((x, i) => {
                            if(x.taskId === action.taskId) {
                                o.tasks = [
                                    ...o.tasks.slice(0, i),
                                    ...o.tasks.slice(i + 1)
                                ]
                            }
                        });
                    }
                }
            });
            return Object.assign({}, state, {
                activeLists: dupe
            });
    }
    return state;
}
