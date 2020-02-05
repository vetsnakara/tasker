import {
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCEEDED,
  CREATE_TASKS_SUCCEEDED,
  EDIT_TASK_SUCCEEDED
} from "../actions";

const initState = {
  tasks: [],
  isLoading: false
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TASKS_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_TASKS_SUCCEEDED:
      return {
        tasks: action.payload.tasks,
        isLoading: false
      };
    case CREATE_TASKS_SUCCEEDED:
      const { task } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, task]
      };
    case EDIT_TASK_SUCCEEDED:
      const { editedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === editedTask.id ? editedTask : task
        )
      };
    default:
      return state;
  }
};

export default tasksReducer;
