import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from './App';
import Login from './view/pages/Login';
import Home from './view/pages/Home';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route  path="/login" render={props => <Login {...props} /> } />
      <Route  path="/" render={props => <Home {...props} /> } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
