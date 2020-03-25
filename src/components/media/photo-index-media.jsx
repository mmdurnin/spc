import React from 'react';

import photo1 from '../../images/headstand_1.jpg';
import photo2 from '../../images/headstand_2_edited.jpg';
import photo3 from '../../images/ph_1_edited.jpg';
import photo4 from '../../images/ph_2.jpg';
import photo5 from '../../images/ph_3.jpg';
import photo6 from '../../images/ph_4.jpg';
import photo7 from '../../images/ph_5.jpg';
import photo8 from '../../images/ph_6.jpg';
import photo9 from '../../images/ph_11.jpeg';
import photo10 from '../../images/ph_12.jpeg';

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
  photo10
];

class Media extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="media-index">

      </div>
    )
  }
}

export default Media;