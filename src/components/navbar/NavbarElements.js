import styled from 'styled-components';
import '../../index.css';


export const Nav = styled.nav`
    background: rgb(12,8,79);
    background: linear-gradient(90deg, rgba(12,8,79,1) 0%, rgba(9,9,121,1) 35%, rgba(0,136,255,1) 100%);
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    position: sticky;
    top: 0;
`

export const NavLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    margin-left: 2rem;
`

export const NavTitle = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: 'Bakbak One', cursive;
    margin-left: 1rem;

    h1 {
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.9);
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 2rem;
`

export const NavItem = styled.li`
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.5rem;
`

export const NavLink = styled.p`
    color: white;
    display: flex;
    align-items: center;
    margin: 1rem;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.9);
    }
`