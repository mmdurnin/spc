import React, { useState, useEffect } from 'react';
import Event from '../../events/event';
import { fetchEvents } from '../../../util/api-util';

const EditableEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents().then(res => {
      setEvents(res)
    }, [])
  })

  let eventKeys;
  if (events) eventKeys = Object.keys(events);

  const deleteEvent = () => {}

  const deleteButton = <button onClick={e => deleteEvent(e)}>Delete Event</button>

  return(
    <div>
      {
        !events
        ? null
        : eventKeys.map((key, idx) => {
          return <Event key={idx} button={deleteButton} track={key} eventDetails={events[key]} />;
        })
      }
    </div>
  )
}

export default EditableEvents;