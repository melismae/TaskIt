import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, deleteTask, completedTask } from '../actions/index';
import _ from 'lodash';

class Tasks extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h3 className="col-xs-8">Tasks for THIS LIST</h3>
                    <h4 className="col-xs-2">Done</h4>
                    <h4 className="col-xs-2">Delete</h4>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <h4>adsflkj af jfasjfaslfa jfajaf afsjfasjfaa afjfa fapfanafma afjafjfpfajaf</h4>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <h4>adsflkj af jfasjfaslfa jfajaf afsjfasjfaa afjfa fapfanafma afjafjfpfajaf</h4>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <h4>adsflkj af jfasjfaslfa jfajaf afsjfasjfaa afjfa fapfanafma afjafjfpfajaf</h4>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-xs-2">
                        <input type="checkbox"/>
                    </div>
                </div>
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