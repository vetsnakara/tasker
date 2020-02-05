import React, { useEffect } from "react";
import { connect } from "react-redux";

import TasksPage from "./components/TasksPage";
import { createTask, editTask, fetchTasks } from "./actions";

const App = ({ tasks, isLoading, dispatch }) => {
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleTaskCreate = task => {
    dispatch(createTask(task));
  };

  const handleStatusChange = (taskId, params) => {
    dispatch(editTask(taskId, params));
  };

  return (
    <div className="main-content">
      <h2>Tasker</h2>
      <TasksPage
        tasks={tasks}
        onTaskCreate={handleTaskCreate}
        onTaskStatusChange={handleStatusChange}
        isLoading={isLoading}
      />
    </div>
  );
};

const mapState = ({ tasks: { tasks, isLoading } }) => ({
  tasks,
  isLoading
});

export default connect(mapState)(App);
