import React from 'react';
import '../../stylesheets/admin.css';

const AuthButton = (props) => {

  const handleOperation = () => {
    if (props.operation) props.operation()
  }
  
  return(
    <button onClick={handleOperation} className="auth-button">{props.title}</button>
  )
}

export default AuthButton;