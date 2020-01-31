import React, {useState} from "react";
import TaskList from "./TaskList";
import {TASK_STATUSES} from "../constants";

const initFormState = {
    showNewCardForm: false,
    title: "",
    description: ""
};

const TasksPage = ({
  tasks, 
  onTaskCreate, 
  onTaskStatusChange
}) => {
  const [state, setState] = useState(initFormState);

  const handleChange = ({target: {name, value}}) => {
    setState({
      ...state,
      [name]: value
    });
  }

  const toggleForm = () => {
    setState({
      ...state,
      showNewCardForm: !state.showNewCardForm
    })
  }

  const resetForm = () => setState(initFormState);

  const handleCreateTask = e => {
    onTaskCreate({
      title: state.title,
      description: state.description
    });
    resetForm();
    e.preventDefault();
  }

  const taskLists = TASK_STATUSES.map(status => {
    const statusTasks = tasks.filter(task => task.status === status);
    return (
      <TaskList
        key={status}
        status={status}
        tasks={statusTasks}
        onTaskStatusChange={onTaskStatusChange}
      />
    );
  })

  return (
    <div className="tasks">
      <div className="tasks-list-header">
        <button
          className="button button-default"
          onClick={toggleForm}
        >
          + New Task
        </button>
      </div>

      {state.showNewCardForm && (
        <form className="task-list-form" onSubmit={handleCreateTask}>
          <input
            className="full-width-input"
            onChange={handleChange}
            value={state.title}
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            className="full-width-input"
            onChange={handleChange}
            value={state.description}
            type="text"
            name="description"
            placeholder="description"
          />
          <button
            type="submit"
            className="submit"
          >
            Save
          </button>
        </form>
      )}

      <div className="task-lists">
        {taskLists}
      </div>
    </div>
  );
}

export default TasksPage;