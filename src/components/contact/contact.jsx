import React from 'react';
import '../../stylesheets/contact-form.css';

import photo1 from '../../images/ph_1_edited.jpg';
import photo2 from '../../images/ph_5.jpg';
import photo3 from '../../images/ph_18.jpeg';
import photo4 from '../../images/headstand_2_edited.jpg';

const imagesArray = [photo1, photo2, photo3, photo4]

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {photos: imagesArray}
  }

  render() {
    return(
      <div className="contact-page">
        <div className="background-photos column">
          {
            this.state.photos.map((photo, idx) => {
              return <img src={photo} key={idx} />
            })
          }
          <div />
        </div>
      </div>
    )
  }
}

export default ContactForm;