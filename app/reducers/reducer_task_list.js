// ADD list
// Toggle list
// Edit list Name
// delete list

import { ADD_LIST, LIST_NAME, SELECT_LIST } from '../actions/index';

const initialState = {
  listName: '',
  activeLists: []
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
                activeLists: state.activeLists.map((list, index) => {
                    console.log(action.index)
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
            })
    }
    return state;
}
