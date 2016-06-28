import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteList, showAll, showCompleted, showIncomplete } from '../actions/index';
import _ from 'lodash';

class TaskFilterButtons extends Component {
    constructor(props) {
        super(props);
        this.taskFilter = this.taskFilter.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }

    taskFilter(value) {
        if (value === 'completed') {
            this.props.showCompleted();
        } else if (value === 'incomplete') {
            this.props.showIncomplete();
        } else {
            this.props.showAll();
        }
    }

    deleteList() {
        this.props.deleteList(this.props.lists.currentList);
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
                    <button className="btn btn-danger" onClick={this.deleteList}>Delete this List</button>
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
