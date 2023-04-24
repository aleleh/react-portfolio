import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import 'animate.css/animate.min.css';
import './index.css';

// Rendering the app
// Creates a new react root using 'createRoot' from reactDOM and targets elements with ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renders the app inside react root
// App component is wrapped with the 'BrowserRouter' and 'React.StrictMode' componets.
// 'BrowserRouter' enables clint side routing and 'React.StrictMode' checks for issues in the app during development
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

