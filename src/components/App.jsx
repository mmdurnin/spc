import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import NavBar from './nav-bar/nav';
import Home from './home';
import Calendar from './events/events';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Calendar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
