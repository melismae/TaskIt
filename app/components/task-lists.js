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
                    className="list-name"
                    key={index}>
                    {list.list}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Task Lists</h1>
                <ul className="list-unstyled">
                    {this.props.lists.activeLists.length > 0 ?
                        this.renderList()
                    : "You don't have any lists. Add one above to get started." }
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
