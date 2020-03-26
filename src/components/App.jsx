import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import NavBar from './nav-bar/nav';
import Home from './home';
import Calendar from './events/events';
import Media from './media/photo-index-media';
import ContactForm from './contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Calendar} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/contact" component={ContactForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
