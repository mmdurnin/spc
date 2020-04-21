import React from 'react';
import image1 from '../../../images/parallax/ph_29_1.jpg';
import image2 from '../../../images/parallax/ph_29__2.png';
import image3 from '../../../images/parallax/ph_29_3.png';
import image4 from '../../../images/parallax/ph_29_4.png';
import '../../../stylesheets/parallax.css';

function ParallaxHome() {
  return(
    <div className="parallax-container column">
      <img src={image1} className="par par-1" />
      <img src={image2} className="par par-2" />
      <img src={image3} className="par par-3" />
      <img src={image4} className="par par-4" />
    </div>
  )
}

export default ParallaxHome;