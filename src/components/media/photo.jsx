import React from 'react';
import '../../stylesheets/media.css';

class Photo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="photo-holder">
        <div className="photo-veil" />
        <img src={this.props.photo} />
      </div>
    )
  }
}

export default Photo;