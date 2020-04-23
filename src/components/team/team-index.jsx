import React from 'react';
import { BIOS } from '../../assets/team-bios';
import Member from './member';
import '../../stylesheets/team.css';

const TeamIndex = () => {
  const members = Object.keys(BIOS);

  return(
    <section className="column team-index">
      {
        members.map((member, idx) => {
          return <Member key={idx} placementKey={idx} member={BIOS[member]}/>
        })
      }
    </section>
  )
}

export default TeamIndex;