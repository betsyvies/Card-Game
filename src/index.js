import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
