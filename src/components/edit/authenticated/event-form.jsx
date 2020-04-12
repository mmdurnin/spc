import React from "react";
import { AuthContext } from "../../App";
import AddEventForm from './add-event';
import EditableEvents from './editable-events';
import AuthButton from '../auth-button';
import '../../../stylesheets/admin.css';

const EventForm = () => {
  const { dispatch } = React.useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <div className="row event-form">
      <EditableEvents />
      <div className="column event-form-right">
        <AddEventForm />
        <AuthButton title={"LOGOUT"} operation={handleLogout} />
      </div>
    </div>
  );
}

export default EventForm;