export default store => next => action => {
  console.group(action.type);
  console.log(`dispatching:`, action);
  next(action);
  console.log(`next state:`, store.getState());
  console.groupEnd(action.type);
};
