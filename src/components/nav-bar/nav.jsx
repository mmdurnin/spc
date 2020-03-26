import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="row nav-container">
        <Link to={"/"} className="nav-link"><button>About</button></Link>
        <button>Collaborators</button>
        <Link to={"/media"} className="nav-link"><button>Media</button></Link>
        <Link to={"/events"} className="nav-link"><button>Events</button></Link>
        <Link to={"/contact"} className="nav-link"><button>Contact</button></Link>
      </div>
    )
  }
}

export default NavBar;