import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import root from './reducer'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore(root)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
