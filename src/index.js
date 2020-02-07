import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import tasksReducer from "./reducers";
import logger from "./middlewares/logger";
import analytics from "./middlewares/analytics";
import apiMiddleware from "./middlewares/api";

import App from "./App";

const rootReducer = (state = {}, action) => ({
  tasks: tasksReducer(state.tasks, action)
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, apiMiddleware, analytics, logger))
);

const render = App => {
  return ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });

  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default;
    store.replaceReducer(nextRootReducer);
  });
}
