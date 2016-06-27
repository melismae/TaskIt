import { ADD_LIST, LIST_NAME, SELECT_LIST, ADD_TASK } from '../actions/index';

const initialState = {
  listName: '',
  activeLists: [],
  currentList: 0
}

let currentIndex = 0;

export default function (state = initialState, action) {
    switch(action.type) {
        case LIST_NAME:
            return Object.assign({}, state, {
                listName: action.listName
            });
        case ADD_LIST:
            return Object.assign({}, state, {
                activeLists: [
                    ...state.activeLists,
                    {
                        listName: action.listName,
                        selected: true
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
        case ADD_TASK:
            //need to return the task in the activeLists with a default of not completed
            //
        // case DELETE_TASK:
            // remove task based on id


    }
    return state;
}
