const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log(currentState);
  next(action);
};

export default logger;
