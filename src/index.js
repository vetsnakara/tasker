import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import tasksReducer from "./reducers";
import rootSaga from "./sagas";

import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state = {}, action) => ({
  tasks: tasksReducer(state.tasks, action)
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

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
