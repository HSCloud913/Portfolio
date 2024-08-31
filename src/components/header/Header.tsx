import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    HeaderMain,
    HeaderTitle,
    HeaderNav,
    HexagonContainer,
    Hexagon,
    HexagonLink,
    ToggleTheme,
    MobileSidebar
} from './HeaderStyle.tsx';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({theme, toggleTheme}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        setIsMenuOpen(false);
    };

    // const items = ['Home', 'About', 'Career', 'Skills', 'Project', 'Contact'];
    const items = ['Home', 'About', 'Career', 'Skills', 'Contact'];

    return (
        <>
            <HeaderMain className="fixed w-full py-4 z-50">
                <div className="flex px-5 justify-between">
                    <div className="flex">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-16 w-16" src="./src/assets/icon.png"/>
                            </div>
                            <div className="flex-shrink-0">
                                <HeaderTitle>Portfolio</HeaderTitle>
                            </div>
                            <div className="flex-shrink-0 ml-10 hidden lg:flex">
                                <ToggleTheme className="flex items-center" onClick={() => toggleTheme()}>
                                    {theme == 'light' && <i className="fas fa-sun text-2xl"/>}
                                    {theme == 'dark' && <i className="fas fa-moon text-2xl"/>}
                                </ToggleTheme>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <div className="flex-shrink-0 mr-3">
                            <ToggleTheme className="flex items-center" onClick={() => toggleTheme()}>
                                {theme == 'light' && <i className="fas fa-sun" style={{fontSize: '24px'}}/>}
                                {theme == 'dark' && <i className="fas fa-moon" style={{fontSize: '24px'}}/>}
                            </ToggleTheme>
                        </div>

                        <button className="focus:outline-none focus:ring-0 active:bg-transparent"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 12h16"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 18h16"/>
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <HeaderNav className="hidden lg:flex">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index} className="relative group">
                                        <HexagonContainer>
                                            <Hexagon activate={activeIndex === index} theme={theme}>
                                                <Link to={`/${item == 'Home' ? '' : item}`} onClick={() => handleClick(index)}>
                                                    <HexagonLink activate={activeIndex === index} theme={theme}>
                                                        {item == 'Home' && <i className="fas fa-home fa-2x"/>}
                                                        {item == 'About' && <i className="fas fa-user fa-2x"/>}
                                                        {item == 'Career' && <i className="fas fa-building fa-2x"/>}
                                                        {item == 'Skills' && <i className="fas fa-code fa-2x"/>}
                                                        {item == 'Project' && <i className="fas fa-layer-group fa-2x"/>}
                                                        {item == 'Contact' && <i className="fas fa-globe-asia fa-2x"/>}
                                                    </HexagonLink>
                                                    <p
                                                        className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease">
                                                        {item}
                                                    </p>
                                                </Link>
                                            </Hexagon>
                                        </HexagonContainer>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </HeaderNav>
                </div>
            </HeaderMain>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></div>
            )}

            {/* Mobile Menu (Slide-in from the right) */}
            <MobileSidebar
                className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out w-52 z-40 lg:hidden`}>
                <div className="flex flex-col p-4">
                    <ul className="mt-28 space-y-4">
                        {items.map((item, index) => (
                            <li key={index} className="relative group">
                                <Link to={`/${item == 'Home' ? '' : item}`} onClick={() => handleClick(index)}
                                      className="px-3 py-2 block">
                                    <div className="flex items-center">
                                        {item == 'Home' && <i className="fas fa-home fa-fw"/>}
                                        {item == 'About' && <i className="fas fa-user fa-fw"/>}
                                        {item == 'Career' && <i className="fas fa-building fa-fw"/>}
                                        {item == 'Skills' && <i className="fas fa-code fa-fw"/>}
                                        {item == 'Project' && <i className="fas fa-layer-group fa-fw"/>}
                                        {item == 'Contact' && <i className="fas fa-globe-asia fa-fw"/>}
                                        <p className="ml-2">{item}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </MobileSidebar>
        </>
    );
};

export default Header;
