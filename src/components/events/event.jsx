import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const Event = (props) => {

  const image = (props.eventDetails.img_src) ? <img src={props.eventDetails.img_src} /> : null;

  return (
    <ScrollAnimation animateIn="zoomIn" duration={1}>
      <div className="event">
        <div className="event-image-frame">{image}</div>
      </div>
    </ScrollAnimation>
  );
}

export default Event;