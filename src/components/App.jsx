import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import NavBar from './nav-bar/nav';
import Home from './home';
import Calendar from './events/events';
import Media from './media/photo-index-media';
import ContactForm from './contact/contact';

// export const AuthContext = React.createContext();
// const getInitialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null
// };
// const reducer = (state, action) => {
//   switch(action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null
//       };
//     default:
//       return state;
//   }
// }

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
