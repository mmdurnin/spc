import React from 'react';
import Parallax from "react-rellax";
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
    <Parallax speed={-1} className="row member-section">
      {subs[leftIdx]}
      {subs[rightIdx]}
    </Parallax>
  )
};

export default Member;