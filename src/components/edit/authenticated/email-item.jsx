import React, {useState} from 'react';

const deleteButtonStyle = {
  position: "relative",
  height: "fit-content",
  width: "fit-content",
  margin: "1em",
  padding: ".85em",
  fontSize: "10px"
}

const showMessageButtonStyle = {
  height: "fit-content",
  width: "fit-content",
  margin: "1em",
  padding: ".85em",
  fontSize: "10px"
}

const EmailRecord = (props) => {
  const [showDetails, toggleDetails] = useState(false);

  

  const message = <h4>{props.record.message}</h4>
  const detailsButtonTitle = (showDetails === false) ? "SHOW MESSAGE FROM SUBSCRIBER" : "HIDE MESSAGE";

  return(
    <div className="email-item ">
      <section className="row">
        <h3>{props.record.name}</h3>
        <h3><strong>{props.record.email}</strong></h3>
        <button style={showMessageButtonStyle} onClick={() => toggleDetails(!showDetails)}>{detailsButtonTitle}</button>
        <button style={deleteButtonStyle} id="deleteButton" onClick={() => props.deleteEmail({id: props.id})}>Delete From Mailing List</button>
      </section>
      {(showDetails) ? message : null}
    </div>
  )
}

export default EmailRecord;