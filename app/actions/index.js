export const ADD_LIST = 'ADD_LIST';
export const LIST_NAME = 'LIST_NAME';
export const SELECT_LIST = 'SELECT_LIST';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

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

export function addTask(task) {
    return {
        type: ADD_TASK,
        task: task
    };
}

export function deleteTask(index) {
    return {
        type: DELETE_TASK,
        index: index
    };
}

export function completeTask(index) {
    return {
        type: COMPLETE_TASK,
        index: index
    };
}
