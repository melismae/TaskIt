import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, deleteTask, completedTask } from '../actions/index';
import _ from 'lodash';

// TODO: used twice - could probably move to helper function in a /lib dir
let debounced = _.debounce(function(val) {
    this.props.addTask(val);
}, 500);

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(this.props);
        let val = event.target.value;
        debounced.call(this, val);
    }

    renderTasks() {
        let tasks = this.props.lists.activeLists !== [] ? this.props.lists.activeLists[this.props.lists.currentList].tasks : '';

        if (!tasks) {
            return;
        }
        return tasks.map((task, index) => {
            return (
                <div className="row">
                    <div className="col-xs-8">
                        <input className="list-group-item"
                        key={index}
                        value={task} />
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                </div>
            );
        });
    }

    render() {
        // TODO add check for current task list name
        let taskListName = "";
        return (
            <div>
                <div className="row">
                    <h3 className="col-xs-8">Tasks for {taskListName}</h3>
                    <h4 className="col-xs-2">Done</h4>
                    <h4 className="col-xs-2">Delete</h4>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <input
                            placeholder="Add Your First Task"
                            onChange={this.onInputChange} />
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                </div>
                {this.renderTasks}
                <div className="row">
                    <button>Add new Task</button>
                    <button>Delete this List</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask, deleteTask, completedTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
