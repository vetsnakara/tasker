import React from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = [
  'Unstarted',
  'In Progress',
  'Completed'
];

const TasksPage = ({tasks}) => {
  const taskLists = TASK_STATUSES.map(status => {
    const statusTasks = tasks.filter(task => task.status === status);
    return <TaskList key={status} status={status} tasks={statusTasks}/>
  })

  return (
    <div className="tasks">
      <div className="task-lists">
        {taskLists}
      </div>
    </div>
  );
}

export default TasksPage;