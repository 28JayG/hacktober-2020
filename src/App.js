import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home.component';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route to='/' exact component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
