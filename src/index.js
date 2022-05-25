import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import AppRoute from './component/App';
import Home from './component/auth/home';
import Dashboard from './component/dashboard/dashboard';
import Employee from './component/employee/employee';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>

        <AppRoute path={'/dashboard'} component={Dashboard} />
        <AppRoute path={'/employee'} component={Employee} />

        <Route path={'/'} component={Home} />

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
