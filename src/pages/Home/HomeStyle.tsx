import styled, {keyframes} from 'styled-components';

const fall = keyframes`
    to {
        transform: translate3d(-30em, 0, 0);
    }
`;

const tailFade = keyframes`
    0%, 50% {
        width: var(--star-tail-length);
        opacity: 1;
    }
    70%, 80% {
        width: 0;
        opacity: 0.4;
    }
    100% {
        width: 0;
        opacity: 0;
    }
`;

const blink = keyframes`
    50% {
        opacity: 0.6;
    }
`;

export const Container = styled.div`
	min-height: 90vh;
    overflow: hidden;
`;

export const Stars = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 260vh;
    height: 100vh;
    transform: rotate(-45deg);
`;

export interface StarProps {
	starTailLength: string;
	topOffset: string;
	fallDuration: string;
	fallDelay: string;
}

export const Star = styled.div<StarProps>`
    --star-tail-length: ${(props) => props.starTailLength};
	--star-width: calc(var(--star-tail-length) / 6);

    position: absolute;
    top: ${(props) => props.topOffset};
    left: 90vh;
    width: ${(props) => props.starTailLength};
    height: 2px;
    color: #4EC0E9;
    background: linear-gradient(45deg, currentColor, transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px currentColor);
    transform: translate3d(104em, 0, 0);
    animation: ${fall} ${(props) => props.fallDuration} ${(props) => props.fallDelay} linear infinite,
    ${tailFade} ${(props) => props.fallDuration} ${(props) => props.fallDelay} ease-out infinite;

    @media screen and (max-width: 750px) {
        animation: ${fall} ${(props) => props.fallDuration} ${(props) => props.fallDelay} linear infinite;
    }

    &::before,
    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: calc(var(--star-width) / -2);
        width: var(--star-width);
        height: 100%;
        background: linear-gradient(45deg, transparent, currentColor, transparent);
        border-radius: inherit;
        animation: ${blink} 2s linear infinite;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`;
