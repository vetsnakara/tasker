import {uniqueId} from "../actions";

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
    case "CREATE_TASK":
      const {tasks} = state;
      return {
        tasks: [
          ...tasks,
          action.payload
        ]
      }
    default:
      return state;
  }
}

export default tasksReducer;