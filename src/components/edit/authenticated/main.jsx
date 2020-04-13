import React, { useState } from 'react';
import EventForm from './event-form';
import MailingList from './mailing-list';

const AuthMain = () => {
  const components = [
    <EventForm />,
    <MailingList />
  ]

  const [renderIdx, setRenderIdx] = useState(0);

  return(
    <div>
      <div className="row nav-container">
        <button onClick={() => setRenderIdx(0)}>Events</button>
        <button onClick={() => setRenderIdx(1)}>Mailing List</button>
      </div>
      {components[renderIdx]}
    </div>
  )
};

export default AuthMain