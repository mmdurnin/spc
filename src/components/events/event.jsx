import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const Event = (props) => {

  const deleteButton = props.deleteEvent 
    ? <button id="deleteButton" onClick={() => props.deleteEvent(props.track)}>x</button>
    : null;
  const image = (props.eventDetails.img_src) ? <img src={props.eventDetails.img_src} /> : null;
  const button = (props.eventDetails.url && props.eventDetails.url_name) ? 
    <a target="_blank" href={props.eventDetails.url}><button>{props.eventDetails.url_name}</button></a>
    : null;

  return (
    <ScrollAnimation className="scroll" animateIn="zoomIn" duration={1}>
      <div className="event row">

        <div className="event-left">
          {image}
          <div className="row">
            <h4>{props.eventDetails.event_date}</h4>
            <h4>|</h4>
            {(props.eventDetails.venue_name) ? <h4>{props.eventDetails.venue_name.toUpperCase()}</h4> : null}
          </div>
        </div>

        <div className="event-right column">
          {deleteButton}
          <h1>{props.eventDetails.event_name}</h1>
          <p>{props.eventDetails.event_description}</p>
          <div className="row">
            <h5>{props.eventDetails.notes}</h5>
            {button}
          </div>
        </div>

      </div>
    </ScrollAnimation>
  );
}

export default Event;