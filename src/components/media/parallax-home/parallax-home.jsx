import React from 'react';
import Parallax from "react-rellax";
// import image1 from '../../../images/parallax/ph_29_1.jpg';
// import image2 from '../../../images/parallax/ph_29__2.png';
// import image3 from '../../../images/parallax/ph_29_3.png';
// import image4 from '../../../images/parallax/ph_29_4.png';
import image1 from '../../../images/ph_29_vignette.jpg';
import image2 from '../../../images/light_bubbles.png';
import '../../../stylesheets/parallax.css';

function ParallaxHome() {
  return (
    <div className="parallax-container">
      <Parallax speed={1}>
        <img src={image1} className="par par-1" />
        <img src={image2} className="par par-2" />
        <Parallax speed={-1.5} className="par par-text">The Crew</Parallax>
      </Parallax>
    </div>
  );
}

export default ParallaxHome;