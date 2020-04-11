import React from 'react';

const Event = (props) => {

  const image = (props.eventDetails.img_src) ? <img src={props.eventDetails.img_src} /> : null;

  return (
    <div className="event">
      <div className="event-image-frame">{image}</div>
    </div>
  );
}

export default Event;