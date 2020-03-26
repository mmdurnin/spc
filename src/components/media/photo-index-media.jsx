import React from 'react';
import '../../stylesheets/media.css';
import Photo from './photo';

import photo1 from '../../images/ph_17.jpeg';
import photo2 from '../../images/headstand_2_edited.jpg';
import photo3 from '../../images/ph_1_edited.jpg';
import photo4 from '../../images/ph_2.jpg';
import photo5 from '../../images/ph_3.jpg';
import photo6 from '../../images/ph_4.jpg';
import photo7 from '../../images/ph_5.jpg';
import photo8 from '../../images/ph_6.jpg';
import photo9 from '../../images/ph_11.jpeg';
import photo10 from '../../images/ph_12.jpeg';
import photo11 from '../../images/headstand_1.jpg';
import photo12 from '../../images/ph_18.jpeg';
import photo13 from '../../images/ph_19.jpeg';

const photosArray = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13
];

class Media extends React.Component {
  constructor(props) {
    super(props)

    this.state = {photos: photosArray}
  }

  render() {
    return(
      <div className="media-index photo-index">
        {
          this.state.photos.map((photo, idx) => {
            return <Photo key={idx} photo={photo} />
          })
        }
      </div>
    )
  }
}

export default Media;