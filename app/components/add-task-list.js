import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addList, listName } from '../actions/index';
import _ from 'lodash';

let debounced = _.debounce(function(val) {
    this.props.listName(val);
}, 300);

class AddTaskList extends Component {
    constructor (props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addList(this.props.lists.list);
    }

    onInputChange(event) {
        let val = event.target.value;
        debounced.call(this, val);
    }

    render() {
        return (
            <div>
                <h1>Add a new task list</h1>
                <input
                    placeholder="Task List Name"
                    onChange={this.onInputChange}
                    className="form-control" />
                <button onClick={this.onSubmit} className="btn btn-primary">CREATE</button>
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
    return bindActionCreators({ addList, listName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskList);
