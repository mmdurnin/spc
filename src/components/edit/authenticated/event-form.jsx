import React from "react";
import { AuthContext } from "../../App";
import AddEventForm from './add-event';
import EditableEvents from './editable-events';
import AuthButton from '../auth-button';
import '../../../stylesheets/admin.css';

class EventForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="row">
        <EditableEvents />
        <div className="column">
          <AddEventForm />
          <AuthButton />
        </div>
      </div>
    )
  }
}

export default EventForm;