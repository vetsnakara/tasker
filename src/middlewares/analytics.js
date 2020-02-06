export default store => next => action => {
  if (action.meta && action.meta.analytics) {
    const { event, data } = action.meta.analytics;

    fakeAnalyticsApi(event, data)
      .then(status => console.log(`Analytics (${status}):`, event, data))
      .catch(error =>
        console.log(
          "An error occured while sending analytics:",
          error.toString()
        )
      );
  }

  next(action);
};

const fakeAnalyticsApi = (eventName, data) =>
  new Promise((res, rej) => {
    res("Success");
  });
