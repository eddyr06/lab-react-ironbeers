import React from 'react';
import './App.css';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          exact
          path="/ListBeers"
          component={(props) => <ListBeers {...props} />}
        />
        <Route
          exact
          path="/RandomBeer"
          component={(props) => <RandomBeer {...props} />}
        />
        <Route
          exact
          path="/NewBeer"
          component={(props) => <NewBeer {...props} />}
        />
        <Route
          exact
          path="/SingleBeer/:beerId"
          component={(props) => <SingleBeer {...props} />}
        />
        <Route component={(props) => <NotFound {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
