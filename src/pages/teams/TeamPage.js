import React from 'react'
import { teamPageData } from './data/team-page-data';
import { 
    TeamContainer, 
    TeamHeader, 
    TeamLogo, 
    TeamName,
    PlayerList,
    PlayerCard
} from '../teams/styles/TeamPageElement';

function TeamPage() {
  return (
    <TeamContainer>
       
            <TeamHeader >
                {/* <TeamLogo>{team.logo}</TeamLogo> */}
                {/* <TeamName>{team.name}</TeamName> */}
            </TeamHeader>
            <PlayerList>
        {teamPageData.map((team, index) => {
            return (
                <>
                <PlayerCard key={index}>
                    <h3>{team.player.name}</h3>
                    <p>{team.player.nation}</p>
                    <p>{team.player.position}</p>
                    <p>{team.player.shoots}</p>
                    <p>{team.player.dob}</p>
                    <p>{team.player.height}</p>
                    <p>{team.player.weight}</p>
                    <p>{team.player.draftTeam}</p>
                    <p>{team.player.draft}</p>
                    <p>{team.player.currentTeam}</p>
                    <p>{team.player.currentLeague}</p>
                </PlayerCard>
                </>
                )
            })}
            </PlayerList>
            
    </TeamContainer>
  )
}

export default TeamPage