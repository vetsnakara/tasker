import { CALL_API } from "../middlewares/api";

// ACTION TYPES
export const EDIT_TASK_SUCCEEDED = "EDIT_TASK_SUCCEEDED";
export const CREATE_TASK_SUCCEEDED = "CREATE_TASK_SUCCEEDED";
export const FETCH_TASKS_SUCCEEDED = "FETCH_TASKS_SUCCEEDED";

export const FETCH_TASKS_STARTED = "FETCH_TASKS_STARTED";
export const CREATE_TASK_STARTED = "CREATE_TASK_STARTED";
export const EDIT_TASK_STARTED = "EDIT_TASK_STARTED";

export const FETCH_TASKS_FAILED = "FETCH_TASKS_FAILED";
export const CREATE_TASK_FAILED = "CREATE_TASK_FAILED";
export const EDIT_TASK_FAILED = "EDIT_TASK_FAILED";

export const fetchTasks = () => ({
  [CALL_API]: {
    types: [FETCH_TASKS_STARTED, FETCH_TASKS_SUCCEEDED, FETCH_TASKS_FAILED],
    endpoint: "/tasks"
  }
});

export const createTask = ({ title, description, status = "Unstarted" }) => ({
  [CALL_API]: {
    types: [CREATE_TASK_STARTED, CREATE_TASK_SUCCEEDED, CREATE_TASK_FAILED],
    endpoint: "/tasks",
    method: "POST",
    body: {
      title,
      description,
      status
    }
  }
});

export const editTask = (taskId, params) => ({
  [CALL_API]: {
    types: [EDIT_TASK_STARTED, EDIT_TASK_SUCCEEDED, EDIT_TASK_FAILED],
    endpoint: `/tasks/${taskId}`,
    method: "PATCH",
    body: {
      ...params
    }
  }
});
