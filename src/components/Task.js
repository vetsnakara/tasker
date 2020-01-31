import React from "react";
import {TASK_STATUSES} from "../constants";

const Task = ({task, onStatusChange}) => {
  const {id, title, description, status} = task;

  const handleStatusChange = ({target: {value: newStatus}}) => {
    onStatusChange(id, {status: newStatus});
  }


  return (
    <div className="task">
      <div className="task-header">
        <div>{title}</div>
        <select value={status} onChange={handleStatusChange}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>)
          )}
        </select>
      </div>
      <hr/>
      <div className="task-body">{description}</div>
    </div>
  );
}

export default Task;