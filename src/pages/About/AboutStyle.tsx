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

export const LicenseDescription = styled.p`
    position: relative;
	
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

export const AwardsDescription = styled.p`
    position: relative;
	
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