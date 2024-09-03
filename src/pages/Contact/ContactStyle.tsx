import styled from 'styled-components';

export const Description = styled.p`
    position: relative;
	line-height: 50px;
	
    &:before {
        content: "";
        position: absolute;
        left: -40px;
        top: 14px;
        width: 25px;
        height: 25px;
        background: #4e54c8;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
`;

export const HexagonWrapper = styled.div`
    margin: auto;
    display: flex;
    textAlign: initial;
    width: 200px;
    height: 200px;
    cursor: pointer;
`;

export const Hexagon = styled.div`
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, #4e54c8, #8f94fb);
    display: flex;
    alignContent: center;
    justifyContent: center;
    transition: 0.5s;
    borderRadius: 0px;

    &:hover {
        borderRadius: 50px;
        transition: 0.5s;
    }

    &:before, &:after {
        position: absolute;
        content: "";
        background: inherit;
        height: 100%;
        width: 100%;
        border-radius: 0;
        transition: 0.5s;
        transform-origin: center;
    }
    
    &:before {
        transform: rotateZ(60deg);
    }
    
    &:after {
        transform: rotateZ(-60deg);
    }
    
    &:hover {
        border-radius: 50px;
        transition: 0.5s;
    }
    
    &:hover:before {
        border-radius: 50px;
        transition: 0.5s;
    }
    
    &:hover:after {
        border-radius: 50px;
        transition: 0.5s;
    }

    i {
        z-Index: 1;
        margin: auto;
        font-size: 50px;
        color: #ffffff;
    }
`;