import React from 'react';
import bannerVid from "../../images/bk_vid.mp4";
import photo1 from '../../images/headstand_1.jpg'
import photo2 from '../../images/headstand_2_edited.jpg'
import photo3 from '../../images/ph_1_edited.jpg'
import photo4 from '../../images/photo_bw.jpg'
import '../../stylesheets/banner.css';

class Banner extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="banner-container row">
        {/* <section className="banner-left">
          <h1>
            STYLE <br /> PROZ <br /> CREW
          </h1>
        </section>
        <div className="banner-right row">
          <section className="row">
            <img src={photo1} alt="" />
            <div className="column collage">
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
            </div>
          </section>
          <video id="background-video" loop autoPlay muted>
            <source src={bannerVid} type="video/mp4" />
          </video> */}
          <div className="gradient-bw">
            <h1>STYLE PROZ CREW</h1>
          </div>
          <img src={photo4} alt=""/>
        </div>
      // </div>
    );
  }
}

export default Banner;