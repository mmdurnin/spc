import React from 'react';
import '../../stylesheets/nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="row nav-container">
        <button>About</button>
        <button>Media</button>
        <button>Collaborators</button>
        <button>Work With Us</button>
        <button>Events</button>
      </div>
    )
  }
}

export default NavBar;