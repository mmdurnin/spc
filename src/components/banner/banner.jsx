import React from 'react';
import bannerVid from "../../images/background_3.mp4";
import '../../stylesheets/banner.css';

class Banner extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="banner-container row">
         <div className="gradient-bw">
          <h1>STYLE PROZ CREW</h1>
        </div>
        <video id="background-video" autoPlay muted>
          <source src={bannerVid} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Banner;