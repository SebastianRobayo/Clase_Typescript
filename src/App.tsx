import React, { Fragment } from 'react';
import Login from './components/Login';
import DashboardClient from './components/DashboardClient';

function App() {
  return (
    <Fragment>
      <DashboardClient/>
      <Login/>
    </Fragment>
  );
}

export default App;
