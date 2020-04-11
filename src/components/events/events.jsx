import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../../util/api-util';
import Event from './event';
import backgroundPhoto from '../../images/ph_20.jpg';
import '../../stylesheets/calendar.css';

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents().then(res => {
      setEvents(res)
    }, [])
  })

  let eventKeys;
  if (events) eventKeys = Object.keys(events);

  return (
    <div>
      <div className="events-background-black" />
      <img className="events-background-photo" src={backgroundPhoto} />
      <div className="events-holder">
        {!events
          ? null
          : eventKeys.map((key, idx) => {
              return <Event key={idx} eventDetails={events[key]} />;
            })}
      </div>
    </div>
  );
}

export default Events;