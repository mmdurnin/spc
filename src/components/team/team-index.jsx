import React from 'react';
import { BIOS } from '../../assets/team-bios';
import Member from './member';
import '../../stylesheets/team.css';

const TeamIndex = () => {
  const members = Object.keys(BIOS);
  console.log(BIOS)
  return(
    <div>
      {
        members.map((member, idx) => {
          return <Member key={idx} member={BIOS[member]}/>
        })
      }
    </div>
  )
}

export default TeamIndex;