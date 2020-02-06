import * as api from "../api";

// ACTION TYPES
export const EDIT_TASK_SUCCEEDED = "EDIT_TASK_SUCCEEDED";
export const CREATE_TASKS_SUCCEEDED = "CREATE_TASKS_SUCCEEDED";
export const FETCH_TASKS_SUCCEEDED = "FETCH_TASKS_SUCCEEDED";

export const FETCH_TASKS_STARTED = "FETCH_TASKS_STARTED";
export const CREATE_TASK_STARTED = "CREATE_TASK_STARTED";
export const EDIT_TASK_STARTED = "EDIT_TASK_STARTED";

export const FETCH_TASKS_FAILED = "FETCH_TASKS_FAILED";
export const CREATE_TASK_FAILED = "CREATE_TASK_FAILED";
export const EDIT_TASK_FAILED = "EDIT_TASK_FAILED";

// UI ACTIONS
export const fetchTasksStarted = () => ({
  type: FETCH_TASKS_STARTED
});

export const createTaskStarted = () => ({
  type: CREATE_TASK_STARTED
});

export const editTaskStarted = () => ({
  type: EDIT_TASK_STARTED
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
  payload: { task },
  meta: {
    analytics: {
      event: "create_task",
      data: {
        id: task.id
      }
    }
  }
});

export const editTaskSucceeded = editedTask => ({
  type: EDIT_TASK_SUCCEEDED,
  payload: {
    editedTask
  }
});

export const fetchTasksFailed = error => ({
  type: FETCH_TASKS_FAILED,
  payload: { error }
});

export const createTaskFailed = error => ({
  type: CREATE_TASK_FAILED,
  payload: { error }
});

export const editTaskFailed = error => ({
  type: EDIT_TASK_FAILED,
  payload: { error }
});

// ASYNC ACTIONS
export const fetchTasks = () => dispatch => {
  dispatch(fetchTasksStarted());
  api
    .fetchTasks()
    .then(({ data: tasks }) => {
      dispatch(fetchTasksSucceeded(tasks));
      // throw new Error("Fetch tasks error");
    })
    .catch(error => dispatch(fetchTasksFailed(error.message)));
};

export const createTask = ({
  title,
  description,
  status = "Unstarted"
}) => dispatch => {
  dispatch(createTaskStarted());
  api
    .createTask({ title, description, status })
    .then(({ data: task }) => {
      dispatch(createTaskSucceeded(task));
      // throw new Error("Create task error");
    })
    .catch(error => dispatch(createTaskFailed(error.message)));
};

export const editTask = (taskId, params = {}) => dispatch => {
  dispatch(editTaskStarted());
  api
    .editTask(taskId, params)
    .then(({ data: editedTask }) => {
      dispatch(editTaskSucceeded(editedTask));
      // throw new Error("Edit task error");
    })
    .catch(error => dispatch(editTaskFailed(error.message)));
};
