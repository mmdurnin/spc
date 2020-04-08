import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import NavBar from './nav-bar/nav';
import Home from './home';
import Calendar from './events/events';
import Media from './media/photo-index-media';
import ContactForm from './contact/contact';
import Login from './edit/not-authenticated/login';
import EventForm from './edit/authenticated/add-event-form';
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  // user: null,
  token: null
};

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        // user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        // user: null
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <div> {state.isAuthenticated ? 
            <EventForm />
            : <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events" component={Calendar} />
              <Route exact path="/media" component={Media} />
              <Route exact path="/contact" component={ContactForm} />
              <Route exact path="/admin-login" component={Login} />
            </Switch>
          }
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
