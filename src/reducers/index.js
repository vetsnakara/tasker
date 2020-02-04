import { FETCH_TASKS_SUCCEEDED, CREATE_TASK, EDIT_TASK } from "../actions";

const initState = {
  tasks: []
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCEEDED:
      return {
        tasks: action.payload.tasks
      };
    case CREATE_TASK:
      return {
        tasks: [...state.tasks, action.payload]
      };
    case EDIT_TASK:
      const { taskId, params } = action.payload;
      return {
        tasks: state.tasks.map(task =>
          task.id === taskId ? { ...task, ...params } : task
        )
      };
    default:
      return state;
  }
};

export default tasksReducer;
