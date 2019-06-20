import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from  'redux-devtools-extension'
// needed dependancies
// applyMiddleware from redux
import thunk from  'redux-thunk'
import logger from 'redux-logger'
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers


const store = createStore(
  rootReducer,
 composeWithDevTools(applyMiddleware(thunk,logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
