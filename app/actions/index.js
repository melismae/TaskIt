// list-specific data
export const ADD_LIST = 'ADD_LIST';
export const LIST_NAME = 'LIST_NAME';
export const SELECT_LIST = 'SELECT_LIST';
export const DELETE_LIST = 'DELETE_LIST';

// task specific data
export const TASK_NAME = 'TASK_NAME';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_EDITED_TASK = 'SAVE_EDITED_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

// for list filtering
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_INCOMPLETE = 'SHOW_INCOMPLETE';

export function addList(list) {
    return {
        type: ADD_LIST,
        list: list
    };
}

export function listName(list) {
    return {
        type: LIST_NAME,
        list: list
    };
}

export function selectList(name, index) {
    return {
        type: SELECT_LIST,
        index: index
    };
}

export function deleteList(listIndex) {
    return {
        type: DELETE_LIST,
        listIndex: listIndex
    };
}

export function taskName(task) {
    return {
        type: TASK_NAME,
        task: task
    };
}

export function addTask(task, list, listIndex) {
    return {
        type: ADD_TASK,
        task: task,
        list: list,
        listIndex: listIndex
    };
}

export function editTask(taskId, listIndex) {
    return {
        type: EDIT_TASK,
        taskId: taskId,
        listIndex: listIndex
    };
}

export function saveEditedTask(task, listIndex, taskId) {
    return {
        type: SAVE_EDITED_TASK,
        task: task,
        listIndex: listIndex,
        taskId: taskId
    };
}

export function deleteTask(taskId, listIndex) {
    return {
        type: DELETE_TASK,
        taskId: taskId,
        listIndex: listIndex
    };
}

export function completeTask(taskId, listIndex) {
    return {
        type: COMPLETE_TASK,
        taskId: taskId,
        listIndex: listIndex
    };
}

export function showAll() {
    return {
        type: SHOW_ALL
    }
}

export function showCompleted() {
    return {
        type: SHOW_COMPLETED
    }
}

export function showIncomplete() {
    return {
        type: SHOW_INCOMPLETE
    }
}
