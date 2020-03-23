import React from 'react';
import '../../stylesheets/media.css';

class Photo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="photo-holder">
        <img src={this.props.photo} alt=""/>
      </div>
    )
  }
}

export default Photo;