import {
  CREATE_TASK,
  EDIT_TASK,
  uniqueId
} from "../actions";

const mockTasks = [
  {
    id: uniqueId(),
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "In Progress"
  },
  {
    id: uniqueId(),
    title: "Peace on Earth",
    description: "No big deal",
    status: "In Progress"
  }
];

const initState = {
  tasks: mockTasks
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
    case EDIT_TASK:
      const {taskId, params} = action.payload;
      return {
        tasks: state.tasks.map(task => task.id === taskId
            ? { ...task, ...params} 
            : task)
      }
    default:
      return state;
  }
}

export default tasksReducer;