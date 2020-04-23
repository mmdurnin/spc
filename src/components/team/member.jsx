import React from 'react';
import MemberProfile from './member-profile';
import MemberDescription from './member-description';

const Member = (props) => {
  const memberDetails = props.member
  const subs = [
    <MemberProfile info={memberDetails} />,
    <MemberDescription bio={memberDetails["bio"]} />
  ]
  let leftIdx, rightIdx;
  [leftIdx, rightIdx] = (props.placementKey % 2 === 0) ? [0, 1] : [1, 0];
  
  return(
    <div  className="row member-section">
      {subs[leftIdx]}
      {subs[rightIdx]}
    </div>
  )
};

export default Member;