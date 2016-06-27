export const ADD_LIST = 'ADD_LIST';
export const LIST_NAME = 'LIST_NAME';
export const SELECT_LIST = 'SELECT_LIST';

export function addList(name) {
    return {
        type: ADD_LIST,
        listName: name
    };
}

export function listName(name) {
    return {
        type: LIST_NAME,
        listName: name
    };
}

export function selectList(name, index) {
    return {
        type: SELECT_LIST,
        index: index
    };
}
