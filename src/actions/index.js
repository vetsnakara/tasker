import axios from "axios";

export const CREATE_TASK = "CREATE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const FETCH_TASKS_SUCCEEDED = "FETCH_TASKS_SUCCEEDED";

export const createTask = ({ title, description }) => ({
  type: CREATE_TASK,
  payload: {
    title,
    description,
    status: "Unstarted"
  }
});

export const editTask = (taskId, params = {}) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    params
  }
});

export const fetchTasksSucceeded = tasks => ({
  type: FETCH_TASKS_SUCCEEDED,
  payload: {
    tasks
  }
});

export const fetchTasks = () => dispatch => {
  axios
    .get("http://localhost:3333/tasks")
    .then(({ data: tasks }) => dispatch(fetchTasksSucceeded(tasks)));
};
