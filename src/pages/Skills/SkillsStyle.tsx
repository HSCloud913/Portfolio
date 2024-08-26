import styled from 'styled-components';

type HexStyle = {
    hexWidth: string;
    hexBetween: string;
    hexTransition: string;
    hexHeight?: string;
    hexMargin?: string;
    hexBorder?: string;
}

const hexStyle: HexStyle = {
    hexWidth: '60px',
    hexBetween: '10px',
    hexTransition: 'all .2s ease'
}

const hexWidthValue = parseFloat(hexStyle.hexWidth);
const hexHeightValue = hexWidthValue / 1.73;
const hexMarginValue = hexWidthValue / 2;
const hexBorderValue = hexMarginValue / 1.73;

hexStyle.hexHeight = `${hexHeightValue}px`;
hexStyle.hexMargin = `${hexMarginValue}px`;
hexStyle.hexBorder = `${hexBorderValue}px`;

export const CardDescriptions = styled.ul`
    li {
        position: relative;
        padding: 0px 0px 10px 30px;
        line-height: 1.5;
    }

    li:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 13px;
        width: 20px;
        height: 2px;
        background: #4e54c8;
    }
`;

export const HexagonContainer = styled.div`
    display: grid;
    grid-template-columns: ${hexStyle.hexWidth} ${hexStyle.hexWidth} ${hexStyle.hexWidth} ${hexStyle.hexWidth};
    grid-auto-rows: calc(${hexStyle.hexWidth} - 28.87px / 2);
    grid-gap: ${hexStyle.hexBetween} ${hexStyle.hexBetween};
    padding-bottom: ${hexStyle.hexBorder};
`;

export const Hexagon = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    fill: white;
    height: ${hexStyle.hexHeight};
    justify-content: center;
    margin: ${hexStyle.hexBorder} 0;
    position: relative;
    transition: ${hexStyle.hexTransition};
    width: ${hexStyle.hexWidth};

    &:after, &:before {
        border-left: ${hexStyle.hexMargin} solid transparent;
        border-right: ${hexStyle.hexMargin} solid transparent;
        content: "";
        left: 0;
        position: absolute;
        transition: ${hexStyle.hexTransition};
        width: 0;
    }

    &:after {
        border-top-style: solid;
        border-top-width: ${hexStyle.hexBorder};
        top: 100%;
        width: 0;
    }

    &:before {
        border-bottom-style: solid;
        border-bottom-width: ${hexStyle.hexBorder};
        bottom: 100%;
    }

    svg {
        height: 90%;
        transition: ${hexStyle.hexTransition};
    }
`;
