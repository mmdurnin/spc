import React from 'react';
import { addEmail } from '../../util/api-util';
import '../../stylesheets/contact-form.css';

import photo1 from '../../images/ph_1_edited.jpg';
import photo2 from '../../images/ph_5.jpg';
import photo3 from '../../images/ph_18.jpeg';
import photo4 from '../../images/headstand_2_edited.jpg';

const imagesArray = [photo1, photo2, photo3, photo4]

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {photos: imagesArray, 
                  topicDD: false, 
                  topic: "General", 
                  firstName: "", 
                  lastName: "", 
                  email: "", 
                  message: "",
                  newsletter: false
                 };

    this.toggleDD = this.toggleDD.bind(this)
    this.selectTopic = this.selectTopic.bind(this)
    this.toggleCheck = this.toggleCheck.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.subscribeToNewsLetter = this.subscribeToNewsLetter.bind(this)
  }

  toggleDD(e, dropdownType) {
    e.stopPropagation()
    if (dropdownType === "all") return this.setState({ topicDD: false }) //update this line to accomodate other dropdowns
    return this.setState({ [dropdownType]: !this.state.dropdownType })
  }

  selectTopic(e, topic) {
    this.setState({ topic: topic })
    return this.toggleDD(e, "all")
  }

  update(e, field) {
    this.setState({ [field]: e.currentTarget.value })
  }

  toggleCheck() {
    this.setState({ newsletter: !this.state.newsletter })
  }

  handleSubmit(e) {
    e.preventDefault()
    const message = {
      topic: this.state.topic,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message
    }
    
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === "success") {
          alert("Message Sent!");
          if (this.state.newsletter === true) this.subscribeToNewsLetter();
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({
      photos: imagesArray,
      topicDD: false,
      topic: "General",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      newsletter: false
    });
  }

  subscribeToNewsLetter() {
    const emailRecord = {
      email: this.state.email,
      message: this.state.message,
      name: this.state.firstName.concat(` ${this.state.lastName}`)
    }

    const data = {mailing_id: Date.now(), emailRecord: emailRecord}
    addEmail(data)
      .then((res) => console.log(res.message))
  }

  render() {
    const topics = [
      "General",
      "Interested in collaborating",
      "Interested in upcoming events"
    ]

    let topicDD;
    if (this.state.topicDD) {
      topicDD = <ul>
        {
          topics.map((topic, idx) => {
            return <li key={idx} onClick={(e) => this.selectTopic(e, topic, "topicDD")} >{topic}</li>
          })
        }
      </ul>
    } else {
      topicDD = <li>{this.state.topic}</li>
    }

    return(
      <div className="contact-page column" onClick={(e) => this.toggleDD(e, "all")} >

        <div className="background-photos column">
          {
            this.state.photos.map((photo, idx) => {
              return <img src={photo} key={idx} />
            })
          }
          <div />
        </div>

        <form className="column" onSubmit={(e) => {this.handleSubmit(e)}}>
          <h3>CONTACT US</h3>

          <h4>Topic</h4>
          <div className="input-wrapper column" onClick={(e) => this.toggleDD(e, "topicDD")}>
            {topicDD}
          </div>

          <h4>Details</h4>
          <div className="row">
            <div className="input-wrapper">
              <input type="text" placeholder="First Name" value={this.state.firstName} onChange={(e) => this.update(e, "firstName")} required/>
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={(e) => this.update(e, "lastName")} />
            </div>
          </div>

          <div className="input-wrapper">
            <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.update(e, "email")} required />
          </div>

          <h4>Message</h4>
          <div className="input-wrapper">
            <textarea value={this.state.message} onChange={(e) => this.update(e, "message")} required />
          </div>

          <div className="row submit-line">
            <span className="row checkbox" onClick={this.toggleCheck}>
              <input type="checkbox" checked={this.state.newsletter} onChange={() => {}}/>
              <span>{!!this.state.newsletter ? <div className="checkmark" /> : <div className="checkmark hidden" />}</span>
              <h4>Newsletter</h4>
            </span>

            <input type="submit" value="SUBMIT" />
          </div>

        </form>
      </div>
    )
  }
}

export default ContactForm;