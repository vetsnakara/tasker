import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createTask, editTask, fetchTasks } from "./actions";

import TasksPage from "./components/TasksPage";
import FlashMessage from "./components/FlashMessage";

const App = ({ tasks, isLoading, error, dispatch }) => {
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
      {error && <FlashMessage message={error} />}
      <TasksPage
        tasks={tasks}
        onTaskCreate={handleTaskCreate}
        onTaskStatusChange={handleStatusChange}
        isLoading={isLoading}
      />
    </div>
  );
};

const mapState = ({ tasks: { tasks, isLoading, error } }) => ({
  tasks,
  isLoading,
  error
});

export default connect(mapState)(App);
