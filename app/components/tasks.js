import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskFilterButtons from './task-filter-buttons';
import { addTask, editTask, saveEditedTask, deleteTask, completeTask, taskName } from '../actions/index';
import _ from 'lodash';

// TODO: used twice - could probably move to helper function in a /lib dir
let debounced = _.debounce(function(val) {
    this.props.taskName(val);
}, 300);

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.newTask = this.newTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.saveEditedTask = this.saveEditedTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    onInputChange(event) {
        let val = event.target.value;
        let currentList = this.props.lists.activeLists[this.props.lists.currentList].list;
        debounced.call(this, val);
    }

    newTask() {
        let task = this.props.lists.task;
        let listIndex = this.props.lists.currentList;
        let list = this.props.lists.activeLists[listIndex].list;
        this.props.addTask(task, list, listIndex);
    }

    editTask(taskId) {
        let listIndex = this.props.lists.currentList;
        this.props.editTask(taskId, listIndex)
    }

    completeTask(taskId) {
        let listIndex = this.props.lists.currentList;
        console.log(taskId, listIndex)
        this.props.completeTask(taskId, listIndex);
    }

    saveEditedTask(taskId) {
        let task = this.props.lists.task;
        let listIndex = this.props.lists.currentList;
        this.props.saveEditedTask(task, listIndex, taskId);
    }

    removeTask(taskId) {
        let listIndex = this.props.lists.currentList;
        this.props.deleteTask(taskId, listIndex);
    }

    renderTasks() {
        let taskArray = this.props.lists.activeLists;
        let tasks = '';
        let filter = this.props.filter.filter;

        if (taskArray.length > 0) {
            tasks = this.props.lists.activeLists[this.props.lists.currentList].tasks;
        }

        if (tasks === '') {
            return;
        }

        // filter settings for list
        if (filter === "incomplete") {
            tasks = _.filter(tasks, ['completed', false]);
        } else if (filter === "completed") {
            tasks = _.filter(tasks, ['completed', true])
        }

        return tasks.map((task, index, filter) => {
            return (
                <div className="row form-inline" key={task.taskId}>
                    <div className="form-group">
                        <div className="col-xs-8">
                        { task.editing ?
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={task.task}
                                onChange={this.onInputChange}
                                onMouseLeave={() => this.saveEditedTask(task.taskId)} /> :
                            <div
                                className="input-group-addon"
                                onClick={() => this.editTask(task.taskId)}>
                                    {task.task}
                            </div> }
                        </div>
                        <div className="col-xs-2">
                            <div className="checkbox"><input checked={task.completed} type="checkbox" onChange={() => this.completeTask(task.taskId)}/></div>

                        </div>
                        <div className="col-xs-2">
                            <div className="checkbox"><input type="checkbox" onClick={() => this.removeTask(task.taskId)}/></div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        let taskArray = this.props.lists.activeLists;
        let taskListName = '';

        if (taskArray.length > 0) {
            taskListName = this.props.lists.activeLists[this.props.lists.currentList].list;
        }
        return (
            <div>
                <div className="row">
                    <h3 className="col-xs-8">Tasks for {taskListName}</h3>
                </div>

                <div className="row">
                    <h4 className="col-xs-offset-8 col-xs-2">Done</h4>
                    <h4 className="col-xs-2">Delete</h4>
                </div>
                {this.renderTasks()}
                <div className="row">
                    <div className="col-xs-8">
                        <input
                            placeholder="Add A Task"
                            onChange={this.onInputChange}
                            className="form-control" />
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-primary" onClick={this.newTask}>Add Task</button>
                    </div>
                </div>
                <TaskFilterButtons />
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    lists: state.lists,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask, editTask, saveEditedTask, deleteTask, completeTask, taskName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
