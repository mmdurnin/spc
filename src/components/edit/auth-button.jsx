import React from 'react';
import '../../stylesheets/admin.css';

const AuthButton = (props) => {
  return(
    <button className="auth-button">{props.title}</button>
  )
}

export default AuthButton;