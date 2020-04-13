import React from 'react';
import AuthButton from "../auth-button";
import { AuthContext } from "../../App";

const MailingList = () => {
  const { dispatch } = React.useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <AuthButton title={"LOGOUT"} operation={handleLogout} />
    </div>
  );
}

export default MailingList;