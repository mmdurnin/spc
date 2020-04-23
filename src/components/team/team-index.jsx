import React from 'react';
import { BIOS } from '../../assets/team-bios.jsx';
import Member from './member';
import '../../stylesheets/team.css';

const TeamIndex = () => {
  const members = Object.keys(BIOS);

  return(
    <div className="column team-index">
      {
        members.map((member, idx) => {
          return <Member key={idx} placementKey={idx} member={BIOS[member]}/>
        })
      }
    </div>
  )
}

export default TeamIndex;