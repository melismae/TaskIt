import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectList } from '../actions/index';
import _ from 'lodash';

class TaskLists extends Component {
    renderList() {
        if (!this.props.lists.activeLists) {
            return;
        }
        return this.props.lists.activeLists.map((list, index) => {
            return (
                <li onClick={() => this.props.selectList(list, index)}
                    className="list-group-item"
                    key={index}>
                    {list.listName}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Task Lists</h3>
                <ul>
                    {this.renderList()}
                </ul>
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
    return bindActionCreators({ selectList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskLists);
