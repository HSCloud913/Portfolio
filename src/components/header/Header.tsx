import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    HeaderMain,
    HeaderContainer,
    HeaderNav,
    HexagonContainer,
    Hexagon,
    HexagonLink,
    ToggleTheme
} from './HeaderStyle.tsx';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({theme, toggleTheme}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <HeaderMain>
            <HeaderContainer>
                <ToggleTheme onClick={() => toggleTheme()}>
                    {theme == 'light' && <i className="fas fa-sun fa-custom-size"/>}
                    {theme == 'dark' && <i className="fas fa-moon fa-custom-size"/>}
                </ToggleTheme>

                <HeaderNav>
                    <ul>
                        <li>
                            <HexagonContainer>
                                <Hexagon activate={activeIndex === 0} theme={theme}>
                                    <Link to="/" onClick={() => handleClick(0)}>
                                        <HexagonLink activate={activeIndex === 0} theme={theme}>
                                            <i className="fas fa-home fa-2x"></i>
                                        </HexagonLink>
                                    </Link>
                                </Hexagon>
                            </HexagonContainer>
                        </li>
                        <li>
                            <HexagonContainer>
                                <Hexagon activate={activeIndex === 1} theme={theme}>
                                    <Link to="/user" onClick={() => handleClick(1)}>
                                        <HexagonLink activate={activeIndex === 1} theme={theme}>
                                            <i className="fas fa-user fa-2x"></i>
                                        </HexagonLink>
                                    </Link>
                                </Hexagon>
                            </HexagonContainer>
                        </li>
                        <li>
                            <HexagonContainer>
                                <Hexagon activate={activeIndex === 2} theme={theme}>
                                    <Link to="/" onClick={() => handleClick(2)}>
                                        <HexagonLink activate={activeIndex === 2} theme={theme}>
                                            <i className="fas fa-building fa-2x"></i>
                                        </HexagonLink>
                                    </Link>
                                </Hexagon>
                            </HexagonContainer>
                        </li>
                        <li>
                            <HexagonContainer>
                                <Hexagon activate={activeIndex === 3} theme={theme}>
                                    <Link to="/" onClick={() => handleClick(3)}>
                                        <HexagonLink activate={activeIndex === 3} theme={theme}>
                                            <i className="fas fa-code fa-2x"></i>
                                        </HexagonLink>
                                    </Link>
                                </Hexagon>
                            </HexagonContainer>
                        </li>
                        <li>
                            <HexagonContainer>
                                <Hexagon activate={activeIndex === 4} theme={theme}>
                                    <Link to="/" onClick={() => handleClick(4)}>
                                        <HexagonLink activate={activeIndex === 4} theme={theme}>
                                            <i className="fas fa-layer-group fa-2x"></i>
                                        </HexagonLink>
                                    </Link>
                                </Hexagon>
                            </HexagonContainer>
                        </li>
                        <li>
                            <HexagonContainer>
                                <Hexagon activate={activeIndex === 5} theme={theme}>
                                    <Link to="/" onClick={() => handleClick(5)}>
                                        <HexagonLink activate={activeIndex === 5} theme={theme}>
                                            <i className="fas fa-globe-asia fa-2x"></i>
                                        </HexagonLink>
                                    </Link>
                                </Hexagon>
                            </HexagonContainer>
                        </li>
                    </ul>
                </HeaderNav>
            </HeaderContainer>
        </HeaderMain>
    );
};

export default Header;
