import React from 'react';
import Parallax from "react-rellax";
// import image1 from '../../../images/parallax/ph_29_1.jpg';
// import image2 from '../../../images/parallax/ph_29__2.png';
// import image3 from '../../../images/parallax/ph_29_3.png';
// import image4 from '../../../images/parallax/ph_29_4.png';
import image1 from '../../../images/ph_29_vignette.jpg';
import image2 from '../../../images/light_bubbles.png';
import image3 from '../../../images/light_bubbles_2.png';
import '../../../stylesheets/parallax.css';

function ParallaxHome() {
  return (
    <section className="parallax-grandparent">
      {/* <div className="parallax-column column">
        <Parallax speed={3} className="bubbles">
          <img src={image3}  />
        </Parallax>
        <Parallax speed={5} className="gradient-blend" />
      </div> */}
      <Parallax speed={2} className="column p-spacer">
        <Parallax speed={2} className="bubbles">
          <img src={image3} />
        </Parallax>
        <div className="gradient-blend" />
      </Parallax>

      <div className="parallax-container">
        <Parallax speed={2.5}>
          <img src={image1} className="par par-1" />
          <img src={image2} className="par par-2" />
          {/* <img src={image3} className="par par-3" /> */}
          <Parallax speed={-2.8} className="par par-text">
            The Crew
          </Parallax>
        </Parallax>

        {/* <Parallax speed={1} id="arrow-container">
          <div class="sliding_arrow">
            <div class="arrow"></div>
          </div>
          <div class="sliding_arrow animation1">
            <div class="arrow"></div>
          </div>
          <div class="sliding_arrow animation2">
            <div class="arrow"></div>
          </div>
          <div class="sliding_arrow animation3">
            <div class="arrow"></div>
          </div>
        </Parallax> */}
      </div>
    </section>
  );
}

export default ParallaxHome;