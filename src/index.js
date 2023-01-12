import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Api from './api/Api'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Api />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
