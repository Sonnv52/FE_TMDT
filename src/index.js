import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only for React version 18
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  root
);