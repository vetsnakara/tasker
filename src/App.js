import React from 'react';
import { connect } from "react-redux";
import TasksPage from "./components/TasksPage";

const App = ({tasks}) => (
    <div className="main-content">
      <TasksPage tasks={tasks}/>
    </div>
  );

const mapState = state => ({
  tasks: state.tasks
});

export default connect(mapState)(App);
