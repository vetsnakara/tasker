import React from 'react';
import { connect } from "react-redux";

import TasksPage from "./components/TasksPage";
import {createTask, editTask} from "./actions";

const App = ({tasks, dispatch}) => {
  const handleTaskCreate = (task) => {
    dispatch(createTask(task))
  }

  const handleStatusChange = (taskId, params) => {
    dispatch(editTask(taskId, params));
  }

  return (
    <div className="main-content">
      <h2>Tasker</h2>
      <TasksPage
        tasks={tasks}
        onTaskCreate={handleTaskCreate}
        onTaskStatusChange={handleStatusChange}
      />
    </div>
  )
};

const mapState = state => ({
  tasks: state.tasks
});

export default connect(mapState)(App);
