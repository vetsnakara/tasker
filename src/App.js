import React from 'react';
import { connect } from "react-redux";

import TasksPage from "./components/TasksPage";
import {createTask} from "./actions";

const App = ({tasks, dispatch}) => {
  const handleCreateTask = (task) => {
    dispatch(createTask(task))
  }

  return (
    <div className="main-content">
      <TasksPage tasks={tasks} onCreateTask={handleCreateTask}/>
    </div>
  )
};

const mapState = state => ({
  tasks: state.tasks
});

export default connect(mapState)(App);
