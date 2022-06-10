import { Link } from 'react-router-dom';
import { FaHockeyPuck } from 'react-icons/fa';
import {
    Nav,
    NavLogo,
    NavTitle,
    NavMenu,
    NavItem,
    NavLink,
} from './NavbarElements';


function Navbar() {
    return (
        <Nav>
          <NavLogo>
            <FaHockeyPuck />
            <NavTitle>
              <h1>Pro Hockey Prospects</h1>
            </NavTitle>
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink>
                  Top 100
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  Teams
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  Leagues
              </NavLink>
            </NavItem>
          </NavMenu>
        </Nav>
    );
}

export default Navbar;
