import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteList, showAll, showCompleted, showIncomplete } from '../actions/index';
import _ from 'lodash';

class TaskFilterButtons extends Component {
    constructor(props) {
        super(props);
        this.taskFilter = this.taskFilter.bind(this);
    }

    taskFilter(value) {
        // let val = event.target.value;
        // let currentList = this.props.lists.activeLists[this.props.lists.currentList].list;
        // debounced.call(this, val);
        if (value === 'completed') {
            this.props.showCompleted();
        } else if (value === 'incomplete') {
            this.props.showIncomplete();
        } else {
            this.props.showAll();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-3">
                    <button className="btn btn-info" onClick={() => this.taskFilter('completed')}>Show Completed</button>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-info" onClick={() => this.taskFilter('incomplete')}>Show Incomplete</button>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-info" onClick={() => this.taskFilter('all')}>Show All</button>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-danger">Delete this List</button>
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
    return bindActionCreators({ deleteList, showAll, showCompleted, showIncomplete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilterButtons);
