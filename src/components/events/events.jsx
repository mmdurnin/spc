import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../../util/api-util';
import Event from './event';
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

  return(
    <div>
      {
        (!events) ?
        null
        : 
        eventKeys.map((key, idx) => {
          return <Event key={idx} eventDetails={events[key]} />
        })
      }
    </div>
  )
}

export default Events;