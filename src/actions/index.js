let _id = 1;

export const CREATE_TASK = "CREATE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const uniqueId = () => _id++;

export const createTask = ({title, description}) => ({
  type: CREATE_TASK,
  payload: {
    id: uniqueId(),
    title,
    description,
    status: "Unstarted"
  }
})

export const editTask = (taskId, params = {}) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    params
  }
});