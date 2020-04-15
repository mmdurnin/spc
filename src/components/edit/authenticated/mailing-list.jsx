import React, { useState, useEffect } from 'react';
import AuthButton from "../auth-button";
import EmailRecord from './email-item';
import { removeEmail, fetchMailingList } from '../../../util/api-util';
import { AuthContext } from "../../App";

const MailingList = () => {
  const [mailingList, setMailingList] = useState([]);

  const { dispatch } = React.useContext(AuthContext);

  useEffect(() => {
    fetchMailingList().then((res) => {
      setMailingList(res);
    });
  }, []);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const deleteEmail = (id) => {
    removeEmail(id);
  };

  let emailKeys;
  if (mailingList) emailKeys = Object.keys(mailingList);

  return (
    <div>
      {!mailingList
      ? null
      : emailKeys.map((key, idx) => {
        return <EmailRecord key={idx} record={mailingList[key]} deleteEmail={deleteEmail} id={key} />
      })}
      <AuthButton title={"LOGOUT"} operation={handleLogout} />
    </div>
  );
}

export default MailingList;