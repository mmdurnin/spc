import React from 'react';
import '../../stylesheets/contact-form.css';

import photo1 from '../../images/ph_1_edited.jpg';
import photo2 from '../../images/ph_5.jpg';
import photo3 from '../../images/ph_18.jpeg';
import photo4 from '../../images/headstand_2_edited.jpg';

const imagesArray = [photo1, photo2, photo3, photo4]

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {photos: imagesArray, topicDD: false, topic: "General", newsletter: false};

    this.toggleDD = this.toggleDD.bind(this)
    this.selectTopic = this.selectTopic.bind(this)
    this.toggleCheck = this.toggleCheck.bind(this)
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

  toggleCheck() {
    this.setState({ newsletter: !this.state.newsletter })
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

        <form className="column">
          <h3>CONTACT US</h3>

          <h4>Topic</h4>
          <div className="input-wrapper column" onClick={(e) => this.toggleDD(e, "topicDD")}>
            {topicDD}
          </div>

          <h4>Details</h4>
          <div className="row">
            <div className="input-wrapper">
              <input type="text" placeholder="First Name"/>
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Email" />
          </div>

          <h4>Message</h4>
          <div className="input-wrapper">
            <textarea />
          </div>

          <div className="row submit-line">
            <span className="row checkbox" onClick={this.toggleCheck}>
              <input type="checkbox" checked={this.state.newsletter}/>
              <span></span>
              <h4>Newsletter</h4>
            </span>

            <input type="submit"/>
          </div>

        </form>
      </div>
    )
  }
}

export default ContactForm;