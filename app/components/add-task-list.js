import React, { Component } from 'react';

export default class AddTaskList extends Component {
    render() {
        return (
            <div>
                <h3>Add A new task list</h3>
                <input placeholder="Task List Name"/>
                <button>Create</button>
            </div>
        )
    }
}
