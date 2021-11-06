import React, { Fragment } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login';
import DashboardClient from './components/DashboardClient';
import DashboardAdmin from './components/DashboardAdmin'

function App() {
  
  return (
    <Router>
      <Route exact path="/" component={DashboardClient}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dashboard_admin" component={DashboardAdmin}/>
    </Router>
  );
}

export default App;
