import React, { Component } from 'react';
import AddTaskList from './add-task-list';
import TaskLists from './task-lists';
import Tasks from './tasks';
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBAGD7DYku1UCogaSSAQMxAE8NAFB23Xww",
  authDomain: "taskit-eca53.firebaseapp.com",
  databaseURL: "https://taskit-eca53.firebaseio.com",
  storageBucket: ""
};
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-5 col-xs-12">
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
