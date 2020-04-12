import React, { useState, useEffect } from 'react';
import Event from '../../events/event';
import { fetchEvents, removeEvent } from "../../../util/api-util";

const EditableEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents().then(res => {
      setEvents(res)
    }, [])
  })

  let eventKeys;
  if (events) eventKeys = Object.keys(events);

  const deleteEvent = (id) => {
    removeEvent({ id: id })
  }

  return(
    <div className="editable-events">
      {
        !events
        ? null
        : eventKeys.map((key, idx) => {
          return <Event key={idx} deleteEvent={deleteEvent} track={key} eventDetails={events[key]} />;
        })
      }
    </div>
  )
}

export default EditableEvents;