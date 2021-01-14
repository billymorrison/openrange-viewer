import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
const path = require("path")

require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
