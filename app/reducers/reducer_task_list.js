import { ADD_LIST, LIST_NAME, SELECT_LIST, ADD_TASK, TASK_NAME, DELETE_TASK } from '../actions/index';

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
            return Object.assign({}, state, {
                activeLists: [
                    ...state.activeLists,
                    {
                        list: action.list,
                        selected: true,
                        tasks: []
                    }
                ]
            });
        case SELECT_LIST:
            return Object.assign({}, state, {
                currentList: action.index,
                activeLists: state.activeLists.map((list, index) => {
                    if(index === action.index) {
                        return Object.assign({}, list, {
                            selected: true
                        })
                    } else {
                        return Object.assign({}, list, {
                            selected: false
                        })
                    }
                })
            });
        case TASK_NAME:
            return Object.assign({}, state, {
                task: action.task
            });
        case ADD_TASK:
            let copy = state.activeLists;
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
            return Object.assign({}, state, {
                task: action.task
            });
            let copy = state.activeLists;
            ...state.slice(0, action.index),
            console.log(copy == state); // false
            console.log(copy.c == state.c); // true
            copy.c = Object.assign({}, state.c);
            console.log(newState.c == state.c); // now it is false
            delete newState.c.y;
            return Object.assign({}, state, {
                activeLists: copy
            });

    }
    return state;
}
