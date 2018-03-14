import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import godReducer from "./reducer";
import bookReducer from "./bookReducer";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ books: bookReducer, gods: godReducer });
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
