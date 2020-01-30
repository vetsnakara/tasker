import React from 'react';
import { connect } from "react-redux";
import TasksPage from "./components/TasksPage";

const App = ({tasks, dispatch}) => {
  const handleCreateTask = task => {
    dispatch({
      type: "CREATE_TASK",
      payload: {
        ...task
      }
    })
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
