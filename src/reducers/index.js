import {
  FETCH_TASKS_STARTED,
  CREATE_TASK_STARTED,
  EDIT_TASK_STARTED,
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
    case CREATE_TASK_STARTED:
    case EDIT_TASK_STARTED:
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
        tasks: [...state.tasks, task],
        isLoading: false
      };
    case EDIT_TASK_SUCCEEDED:
      const { editedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === editedTask.id ? editedTask : task
        ),
        isLoading: false
      };
    default:
      return state;
  }
};

export default tasksReducer;
