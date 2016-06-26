import React, { Component } from 'react';
import AddTaskList from './add-task-list';
import TaskLists from './task-lists';
import Tasks from './tasks';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="pull-left col-sm-5 col-xs-12">
          <AddTaskList />
          <TaskLists />
        </div>
        <div className="col-sm-7 col-xs-12">
            <Tasks />
        </div>
      </div>
    );
  }
}
