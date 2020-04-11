import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
// import { Link } from 'react-router-dom';

const Event = (props) => {

  const image = (props.eventDetails.img_src) ? <img src={props.eventDetails.img_src} /> : null;
  const button = (props.eventDetails.url && props.eventDetails.url_name) ? 
    <a target="_blank" href={props.eventDetails.url}><button>{props.eventDetails.url_name}</button></a>
    : null;

  return (
    <ScrollAnimation animateIn="zoomIn" duration={1}>
      <div className="event">
        <h1>{props.eventDetails.event_name}</h1>
        {/* <div className="event-image-frame">{image}</div> */}
        {button}
      </div>
    </ScrollAnimation>
  );
}

export default Event;