import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/media.css';
import Photo from './photo.jsx';

import photo1 from '../../images/headstand_1.jpg';
import photo7 from '../../images/ph_5.jpg';
import photo9 from '../../images/ph_11.jpeg';
import photo10 from '../../images/ph_12.jpeg';

function PhotoIndex() {
  const photosArray = [
    photo1,
    photo7,
    photo9,
    photo10
  ];

  return(
    <section>
      <div className="photo-index row">
        {
           photosArray.map((photo, idx) => {
             return <Link to={"/media"} className="photo-holder" ><Photo key={idx} photo={photo} /></Link>
           })
        }
      </div>
    </section>
  )
}

export default PhotoIndex;