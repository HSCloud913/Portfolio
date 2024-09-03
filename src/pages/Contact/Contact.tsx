import React from 'react';
import {Description, HexagonWrapper, Hexagon} from './ContactStyle.tsx'

const Contact: React.FC = () => {
    const instagramClick = () => {
        window.open('https://www.instagram.com/c__nebulae', '_blank');
    }

    const githubClick = () => {
        window.open('https://github.com/HSCloud913', '_blank');
    }

    return (
        <div className="px-10 pb-[150px]">
            <div className="relative py-20 text-center">
                <h2 className="text-5xl font-black">
                    CONTACT
                </h2>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1">
                    <Description className="ml-[40px] text-xl">
                        Email:
                        <span className="ml-2">hscloud913@naver.com</span>
                    </Description>
                    <Description className="ml-[40px] text-xl">
                        Instagram:
                        <span className="ml-2">https://www.instagram.com/c__nebulae</span>
                    </Description>
                    <Description className="ml-[40px] text-xl">
                        Github:
                        <span className="ml-2">https://github.com/HSCloud913</span>
                    </Description>
                </div>
            </div>

            <div className="flex flex-wrap max-w-[800px] mx-auto mt-20 gap-4">
                <div className="flex-1 min-w-[300px] max-w-[500x]">
                    <HexagonWrapper>
                        <Hexagon onClick={instagramClick}>
                            <i className="fab fa-instagram"/>
                        </Hexagon>
                    </HexagonWrapper>
                </div>

                <div className="flex-1 min-w-[300px] max-w-[500x]">
                    <HexagonWrapper>
                        <Hexagon onClick={githubClick}>
                            <i className="fab fa-github"/>
                        </Hexagon>
                    </HexagonWrapper>
                </div>
            </div>
        </div>
    );
};

export default Contact;