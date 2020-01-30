const mockTasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "In Progress"
  },
  {
    id: 2,  title: "Peace on Earth",
    description: "No big deal",
    status: "In Progress"
  }
];

const initState = {
  tasks: mockTasks
};

const tasksReducer = (state = initState, action) => {
  return state;
}

export default tasksReducer;