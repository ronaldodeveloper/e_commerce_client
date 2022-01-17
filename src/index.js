import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import App from './App';

// set hot reloads
if(module.hot){
  module.hot.accept()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

