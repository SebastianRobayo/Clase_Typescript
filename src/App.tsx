import React from 'react';
import Login from './components/Login';
import DashboardClient from './components/DashboardClient'
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={DashboardClient}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Router>
  );
}

export default App;
