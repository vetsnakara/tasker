let _id = 1;

const CREATE_TASK = "CREATE_TASK";

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