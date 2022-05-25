import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Layout from './layout';

const AppRoute = ({ component: Component, rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        <Layout>
          <Component {...routeProps} />
        </Layout>
      }
    />
  )
}

export default AppRoute;
