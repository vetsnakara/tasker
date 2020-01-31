import React from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  status,
  onTaskStatusChange
}) => {
  return (
    <div className="task-list">
      <div className="task-list-title">
        <strong>{status}</strong>
      </div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={onTaskStatusChange}
        />
      ))}
    </div>
  )
};

export default TaskList;