import React, { useState, useEffect } from 'react';
import AuthButton from "../auth-button";
import EmailRecord from './email-item';
import { fetchMailingList } from '../../../util/api-util';
import { AuthContext } from "../../App";

const MailingList = () => {
  const [mailingList, setMailingList] = useState([]);

  const { dispatch } = React.useContext(AuthContext);

  useEffect(() => {
    fetchMailingList()
    .then(res => { 
      setMailingList(res)
    }, [])
  })

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  let emailKeys;
  if (mailingList) emailKeys = Object.keys(mailingList);

  return (
    <div>
      {!mailingList
      ? null
      : emailKeys.map((key, idx) => {
        return <EmailRecord key={idx} record={mailingList[key]} id={key} />
      })}
      <AuthButton title={"LOGOUT"} operation={handleLogout} />
    </div>
  );
}

export default MailingList;