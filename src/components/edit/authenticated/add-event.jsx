import React from 'react';
import Event from "../../events/event";
import '../../../stylesheets/calendar.css';

class AddEventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event_date: "", 
      event_description: "", 
      img_src: "",
      event_name: "",
      notes: "",
      url: "",
      url_name: "",
      venue_address: "",
      venue_name: "",
      event_key: ""
    }

    this.update = this.update.bind(this)
  }

  update(e, field) {
    console.log(e.target.value)
    console.log(field)
    this.setState({ [field]: e.target.value })
  }

  render() {
    const eventDetails = {
      event_date: this.state.event_date,
      event_description: this.state.event_description,
      img_src: this.state.img_src,
      event_name: this.state.event_name,
      notes: this.state.notes,
      url: this.state.url,
      url_name: this.state.url_name,
      venue_address: this.state.venue_address,
      venue_name: this.state.venue_name,
    };
    return(
      <div className="column add-event">
        <form>
          <label >
            Event Name:
            <input 
              type="text"
              name="event_name"
              value={this.state.event_name}
              onChange={(e) => this.update(e, "event_name")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Venue Name:
            <input 
              type="text"
              name="venue_name"
              value={this.state.venue_name}
              onChange={(e) => this.update(e, "venue_name")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Venue Address:
            <input 
              type="text"
              name="venue_address"
              value={this.state.venue_address}
              onChange={(e) => this.update(e, "venue_address")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Event Date: 
            <p>format: "April 27 2010, 5:00PM"</p>
            <input 
              type="text"
              name="event_date"
              value={this.state.event_date}
              onChange={(e) => this.update(e, "event_date")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Event Description:
            <input 
              type="text"
              name="event_description"
              value={this.state.event_description}
              onChange={(e) => this.update(e, "event_description")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Image Source:
            <input 
              type="text"
              name="img_src"
              value={this.state.img_src}
              onChange={(e) => this.update(e, "img_src")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Notes:
            <p>Example: "Doors open at 8:00", "Buy tickets at the door"</p>
            <input 
              type="text"
              name="notes"
              value={this.state.notes}
              onChange={(e) => this.update(e, "notes")}
            />
          </label>
          <br/>
          <br/>
          <label >
            URL:
            <p>This is what the button will link to</p>
            <p>For linking another site (e.g., buying tickets, venue website, etc)</p>
            <p>MUST start with http or https (go to the website and copy paste)</p>
            <input 
              type="text"
              name="url"
              value={this.state.url}
              onChange={(e) => this.update(e, "url")}
            />
          </label>
          <br/>
          <br/>
          <label >
            Link Name:
            <p>The name of the button (e.g., "Purchase Tickets", "Venue Site"</p>
            <p>(Keep it short so the button doesn't look weird)</p>
            <input 
              type="text"
              name="url_name"
              value={this.state.url_name}
              onChange={(e) => this.update(e, "url_name")}
            />
          </label>
          <br/>
          <br/>
          <label>
            <p>The event needs a unique key to be stored in the database. Give it the event date + time in this format:</p>
            <p>April 27, 2009, 3:00PM = 0427091500</p>
            <p>December 25, 2021, 9:30AM = 1225210930</p>
            <p>(I'm also using this key to arrange the events in order, so make sure to stick with the format -- it should be 10 digits)</p>
            <input 
              type="text"
              name="event_key"
              value={this.state.event_key}
              onChange={(e) => this.update(e, "event_key")}
            />
          </label>

          <div className="row">
            <Event eventDetails={eventDetails} />
            <input type="submit" value="ADD EVENT TO CALENDAR"/>
          </div>
        </form>

      </div>
    )
  }
}

export default AddEventForm;