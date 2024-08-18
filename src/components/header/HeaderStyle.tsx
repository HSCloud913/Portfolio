import styled from 'styled-components';

interface HeaderProps {
    theme: 'light' | 'dark';
}

interface HexagonProps {
    activate?: boolean;
    theme: 'light' | 'dark';
}

export const HeaderMain = styled.header<HeaderProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    padding-top: 15px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        li {
            margin: 0 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:last-child {
                margin-right: 50px;
            }
        }
    }
`;

export const HexagonContainer = styled.div`
    transform: translate(0%, 0%);
`;

export const Hexagon = styled.div<HexagonProps>`
    width: calc(60px * 0.645);
    height: 60px;
    background-image: linear-gradient(90deg, #4e54c811, #8f94fb11);
    border-radius: calc(60px / 10);
    transition: transform 400ms ease;
    position: relative;

    &:hover {
        background-image: linear-gradient(90deg, #4e54c8, #8f94fb);
        transform: rotate(30deg);

        a {
            color: #ffffff;
            transform: rotate(-30deg);
        }
    }

    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: inherit;
        height: inherit;
        background-image: inherit;
        border-radius: inherit;
    }

    &:before {
        transform: rotate(60deg);
    }

    &:after {
        transform: rotate(-60deg);
    }

    ${(props) => props.activate && `
        background-image: linear-gradient(90deg, #4e54c8, #8f94fb);
    `}
`;

export const HexagonLink = styled.a<HexagonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.activate ? "#ffffff" : "#ffffff99"};
    position: relative;
    z-index: 1;
    transition: all 400ms ease;
`;

export const ToggleTheme = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    opacity: 0;
    position: absolute;
`;

export const CheckboxLabel = styled.label<HeaderProps>`
    background-color: #111;
    width: 75px;
    height: 39px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .fa-moon {
        color: #f1c40f;
    }

    .fa-sun {
        color: #f39c12;
    }

    .fa-custom-size {
        font-size: 25px;
    }
`;

export const Ball = styled.div<HeaderProps>`
    background-color: #fff;
    width: 33px;
    height: 33px;
    position: absolute;
    top: 3px;
    left: ${(props) => (props.theme === 'dark' ? '38px' : '3px')};
    border-radius: 50%;
    transition: left 0.2s linear;
`;
