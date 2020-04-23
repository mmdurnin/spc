import React from 'react';

const MemberProfile = (props) => {
  const info = props.info;

  console.log(info)
  return(
    <div className="profile-container">
      {info.image}
    </div>
  )
};

export default MemberProfile;