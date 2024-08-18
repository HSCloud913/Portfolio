// import React from 'react';
// import {
//     HeaderMain,
//     HeaderContainer,
//     HeaderNav,
//     HexagonContainer,
//     Hexagon,
//     HexagonLink,
//     ToggleTheme,
//     Checkbox,
//     CheckboxLabel,
//     Ball
// } from './HeaderStyle.tsx';
//
// interface HeaderProps {
//     theme: 'light' | 'dark';
//     toggleTheme: () => void;
// }
//
// const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
//     return (
//         <HeaderMain theme={theme}>
//             <HeaderContainer>
//                 <ToggleTheme>
//                     <Checkbox
//                         type="checkbox"
//                         id="checkbox"
//                         checked={theme === 'dark'}
//                         onChange={toggleTheme}
//                     />
//                     <CheckboxLabel htmlFor="checkbox">
//                         <i className="fas fa-moon fa-custom-size"></i>
//                         <i className="fas fa-sun fa-custom-size"></i>
//                         <Ball theme={theme} />
//                     </CheckboxLabel>
//                 </ToggleTheme>
//
//                 <HeaderNav>
//                     <ul>
//                         <li>
//                             <HexagonContainer>
//                                 <Hexagon activate={true}>
//                                     <HexagonLink href="/" activate={true} theme={theme}>
//                                         <i className="fas fa-home fa-2x"></i>
//                                     </HexagonLink>
//                                 </Hexagon>
//                             </HexagonContainer>
//                         </li>
//                         <li>
//                             <HexagonContainer>
//                                 <Hexagon>
//                                     <HexagonLink href="/user" theme={theme}>
//                                         <i className="fas fa-user fa-2x"></i>
//                                     </HexagonLink>
//                                 </Hexagon>
//                             </HexagonContainer>
//                         </li>
//                         <li>
//                             <HexagonContainer>
//                                 <Hexagon>
//                                     <HexagonLink href="#2" theme={theme}>
//                                         <i className="fas fa-building fa-2x"></i>
//                                     </HexagonLink>
//                                 </Hexagon>
//                             </HexagonContainer>
//                         </li>
//                         <li>
//                             <HexagonContainer>
//                                 <Hexagon>
//                                     <HexagonLink href="#2" theme={theme}>
//                                         <i className="fas fa-code fa-2x"></i>
//                                     </HexagonLink>
//                                 </Hexagon>
//                             </HexagonContainer>
//                         </li>
//                         <li>
//                             <HexagonContainer>
//                                 <Hexagon>
//                                     <HexagonLink href="#2" theme={theme}>
//                                         <i className="fas fa-layer-group fa-2x"></i>
//                                     </HexagonLink>
//                                 </Hexagon>
//                             </HexagonContainer>
//                         </li>
//                         <li>
//                             <HexagonContainer>
//                                 <Hexagon>
//                                     <HexagonLink href="#2" theme={theme}>
//                                         <i className="fas fa-globe-asia fa-2x"></i>
//                                     </HexagonLink>
//                                 </Hexagon>
//                             </HexagonContainer>
//                         </li>
//                     </ul>
//                 </HeaderNav>
//             </HeaderContainer>
//         </HeaderMain>
//     );
// };
//
// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
    toggleTheme: () => void;
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.navBackground};
    padding: 1rem;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    color: ${(props) => props.theme.linkColor};
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;

const ThemeToggleButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.linkColor};
    cursor: pointer;
    font-size: 1rem;
`;

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    return (
        <HeaderContainer>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/user">User</NavLink>
            </Nav>
            <ThemeToggleButton onClick={toggleTheme}>
                Toggle Theme
            </ThemeToggleButton>
        </HeaderContainer>
    );
};

export default Header;