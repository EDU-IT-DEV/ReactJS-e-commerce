import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ClothingShow from './clothings/ClothingsList';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ClothingShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
