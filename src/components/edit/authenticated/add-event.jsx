import React from 'react';
import Event from "../../events/event";
import '../../../stylesheets/calendar.css';

class AddEventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventDetails: {
        event_date: "", 
        event_description: "", 
        img_src: "",
        event_name: "",
        notes: "",
        url: "",
        url_name: "",
        venue_address: "",
        venue_name: ""
      }}

    this.update = this.update.bind(this)
  }

  update(e, field) {
    this.setState({ eventDetails: { [field]: e.target.value } })
  }

  render() {
    return(
      <div className="column">
        <form>
          <label >
            Event Name:
            <input 
              type="text"
              name="event_name"
              value={this.state.eventDetails.event_name}
              onChange={(e) => this.update(e, "event_name")}
            />
          </label>
          <label>
            Venue Name:
            <input 
              type="text"
              name="venue_name"
              value={this.state.eventDetails.venue_name}
              onChange={(e) => this.update(e, "venue_name")}
            />
          </label>
          <label >
            Venue Address:
            <input 
              type="text"
              name="venue_address"
              value={this.state.eventDetails.venue_address}
              onChange={(e) => this.update(e, "venue_address")}
            />
          </label>
          <label >
            Event Date: 
            <p>format: "April 27 2010, 5:00PM"</p>
            <input 
              type="text"
              name="event_date"
              value={this.state.eventDetails.event_date}
              onChange={(e) => this.update(e, "event_date")}
            />
          </label>
          <label >
            Event Description:
            <input 
              type="text"
              name="event_description"
              value={this.state.eventDetails.event_description}
              onChange={(e) => this.update(e, "event_description")}
            />
          </label>
          <label >
            Image Source:
            <input 
              type="text"
              name="img_src"
              value={this.state.eventDetails.img_src}
              onChange={(e) => this.update(e, "img_src")}
            />
          </label>
          <label >
            Venue Name:
            <input 
              type="text"
              name="venue_name"
              value={this.state.eventDetails.venue_name}
              onChange={(e) => this.update(e, "venue_name")}
            />
          </label>
          <label >
            Venue Name:
            <input 
              type="text"
              name="venue_name"
              value={this.state.eventDetails.venue_name}
              onChange={(e) => this.update(e, "venue_name")}
            />
          </label>
          <label >
            Venue Name:
            <input 
              type="text"
              name="venue_name"
              value={this.state.eventDetails.venue_name}
              onChange={(e) => this.update(e, "venue_name")}
            />
          </label>
        </form>

        <Event eventDetails={this.state.eventDetails} />
      </div>
    )
  }
}

export default AddEventForm;