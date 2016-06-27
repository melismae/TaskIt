import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskFilterButtons from './task-filter-buttons';
import { addTask, deleteTask, completedTask, taskName } from '../actions/index';
import _ from 'lodash';

// TODO: used twice - could probably move to helper function in a /lib dir
let debounced = _.debounce(function(val) {
    this.props.taskName(val);
}, 200);

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.newTask = this.newTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    onInputChange(event) {
        let val = event.target.value;
        let currentList = this.props.lists.activeLists[this.props.lists.currentList].list;
        debounced.call(this, val);
    }

    newTask() {
        let task = this.props.lists.task;
        let list = this.props.lists.activeLists[this.props.lists.currentList].list;
        this.props.addTask(task, list);
    }

    removeTask(index) {
        console.log(index);
        this.props.deleteTask(index, this.props.currentList);
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
                <div className="row form-inline" key={index}>
                    <div className="form-group">
                        <div className="col-xs-8">
                            <div className="input-group-addon">{task.task}</div>
                        </div>
                        <div className="col-xs-2">
                            <div className="checkbox"><input type="checkbox"/></div>

                        </div>
                        <div className="col-xs-2">
                            <div className="checkbox"><input type="checkbox" onClick={() => this.removeTask(index)}/></div>
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
    return bindActionCreators({ addTask, deleteTask, completedTask, taskName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
