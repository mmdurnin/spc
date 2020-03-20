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
        <button>Events</button>
        <button>Gallery</button>
        <button>Contribute</button>
        <button>Contact</button>
      </div>
    )
  }
}

export default NavBar;