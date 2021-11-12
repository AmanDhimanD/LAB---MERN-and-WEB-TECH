import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Event from './page/events'
import ClassComp from './page/ClassComp'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Event />
    <ClassComp />

  </React.StrictMode>,
  document.getElementById('root')
);


