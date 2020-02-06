import {
  FETCH_TASKS_STARTED,
  CREATE_TASK_STARTED,
  EDIT_TASK_STARTED,
  FETCH_TASKS_FAILED,
  CREATE_TASK_FAILED,
  EDIT_TASK_FAILED,
  FETCH_TASKS_SUCCEEDED,
  CREATE_TASKS_SUCCEEDED,
  EDIT_TASK_SUCCEEDED
} from "../actions";

const initState = {
  tasks: [],
  isLoading: false,
  error: null
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TASKS_STARTED:
    case CREATE_TASK_STARTED:
    case EDIT_TASK_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_TASKS_FAILED:
    case CREATE_TASK_FAILED:
    case EDIT_TASK_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case FETCH_TASKS_SUCCEEDED:
      return {
        tasks: action.payload.tasks,
        isLoading: false,
        error: null
      };
    case CREATE_TASKS_SUCCEEDED:
      const { task } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, task],
        isLoading: false,
        error: null
      };
    case EDIT_TASK_SUCCEEDED:
      const { editedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === editedTask.id ? editedTask : task
        ),
        isLoading: false,
        error: null
      };
    default:
      return state;
  }
};

export default tasksReducer;
