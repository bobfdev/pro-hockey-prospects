import styled from 'styled-components'


export const TeamContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TeamHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const TeamLogo = styled.img`
    width: 100%;
    height: auto;
`

export const TeamName = styled.div`
    font-size: 2rem;
`

export const PlayerList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    gap: 2rem;
    height: 100%;
    /* width: 100vw; */
    margin: 2rem;
`

export const PlayerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative; */
    height: 360px;
    width: 100%;
    margin: 2rem;
    border-radius: 10px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in;
    }
`