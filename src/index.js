import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import store from './redux/store';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <App store={store} basename={PUBLIC_URL} />,
  document.getElementById('root')
);
