import React from 'react';
import { Router,  Switch } from 'react-router-dom';
//import StreamCreate from './streams/StreamCreate';
//import StreamEdit from './streams/StreamEdit';
//import StreamDelete from './streams/StreamDelete';
//import StreamList from './streams/StreamList';
//import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
           
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
