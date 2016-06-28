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
            <div className="button-filter-wrapper">
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Currently showing {this.props.filter.filter} tasks</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <p className="text-left">Filter by</p>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-info" onClick={() => this.taskFilter('completed')}> COMPLETED</button>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-info" onClick={() => this.taskFilter('incomplete')}> INCOMPLETE</button>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-info" onClick={() => this.taskFilter('all')}>ALL</button>
                    </div>
                    <div className="col-xs-4">
                        <button className="btn btn-danger" onClick={this.deleteList}>DELETE THIS LIST</button>
                    </div>
                </div>
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
    return bindActionCreators({ deleteList, showAll, showCompleted, showIncomplete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilterButtons);
