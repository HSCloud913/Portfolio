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
    background-color: #4e54c8;

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
        border-top-color: #4e54c8;
        border-top-style: solid;
        border-top-width: ${hexStyle.hexBorder};
        top: 100%;
        width: 0;
    }

    &:before {
        border-bottom-color: #4e54c8;
        border-bottom-style: solid;
        border-bottom-width: ${hexStyle.hexBorder};
        bottom: 100%;
    }
`;

export const TimelineContainer = styled.div`
    word-break: keep-all;
    
    ul {
        display: inline-block;
        padding-left: 50px;
    }
    
    li {
        position: relative;
        border-left: 1px dashed;
        padding: 0 0 50px 30px;
    }
    
    li:last-child {
        border-left: 0;
    }
    
    li::before {
        position: absolute;
        left: -20px;
        top: -5px;
        content: " ";
        border: 8px solid;
        border-radius: 500%;
        background: #4e54c8;
        height: 40px;
        width: 40px;
        transition: all 500ms ease-in-out;
    }
    
    li:hover::before {
        border-color: #8f94fb;
        transition: all 500ms ease-in-out;
    }
`;

export const Timestamp = styled.div`
    color: #4e54c8;
    position: relative;
    width: 100px;
    font-size: 14px;
    font-weight: bold;
`;

export const Title = styled.div`
    font-size: 18px;
`;

export const Content = styled.div`
    margin-top: 10px;
    font-size: 14px;
`;