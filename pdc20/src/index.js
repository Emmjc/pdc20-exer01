import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import RegistrationMod01 from './RegistrationMod01';
import ExpressionJSX from './ExpressionJSX';
import GreetHello from './Greetings/GreetHello';
import HomePage from './Conditionals/Homepage';
import LogAdmin from './Dashboard/LogAdmin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogAdmin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
