import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Dashboard from './Dashboard';

const App = ({ isAuthenticated }) => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute
        path="/dashboard"
        component={Dashboard}
        isAuthenticated={isAuthenticated}
      />
    </Switch>
  </Router>
);

export default App;
