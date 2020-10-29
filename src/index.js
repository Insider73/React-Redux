import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppRedux from './Redux/app';
//import store from './Redux-Toolkit/store';
import {store} from './Redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRedux/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
