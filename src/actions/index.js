import * as api from "../api";

// ACTION TYPES
export const EDIT_TASK_SUCCEEDED = "EDIT_TASK_SUCCEEDED";
export const CREATE_TASKS_SUCCEEDED = "CREATE_TASKS_SUCCEEDED";
export const FETCH_TASKS_STARTED = "FETCH_TASKS_STARTED";
export const FETCH_TASKS_SUCCEEDED = "FETCH_TASKS_SUCCEEDED";

export const fetchTasksStarted = () => ({
  type: FETCH_TASKS_STARTED
});

// SERVER ACTIONS
export const fetchTasksSucceeded = tasks => ({
  type: FETCH_TASKS_SUCCEEDED,
  payload: {
    tasks
  }
});

export const createTaskSucceeded = task => ({
  type: CREATE_TASKS_SUCCEEDED,
  payload: { task }
});

export const editTaskSucceeded = editedTask => ({
  type: EDIT_TASK_SUCCEEDED,
  payload: {
    editedTask
  }
});

// ASYNC ACTIONS
export const fetchTasks = () => dispatch => {
  dispatch(fetchTasksStarted());
  api.fetchTasks().then(({ data: tasks }) =>
    setTimeout(() => {
      dispatch(fetchTasksSucceeded(tasks));
    }, 2000)
  );
};

export const createTask = ({
  title,
  description,
  status = "Unstarted"
}) => dispatch => {
  api
    .createTask({ title, description, status })
    .then(({ data: task }) => dispatch(createTaskSucceeded(task)));
};

export const editTask = (taskId, params = {}) => dispatch => {
  api
    .editTask(taskId, params)
    .then(({ data: editedTask }) => dispatch(editTaskSucceeded(editedTask)));
};
