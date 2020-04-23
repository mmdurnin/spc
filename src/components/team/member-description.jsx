import React from 'react';

const MemberDescription = (props) => {
  const bio = props.bio;

  console.log(bio)
  return(
    <div className="bio-container column">
      <p>{bio}</p>
    </div>
  )
};

export default MemberDescription;