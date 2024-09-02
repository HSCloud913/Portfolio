import React from 'react';
import {AwardsDescription, Description, LicenseDescription} from './AboutStyle.tsx';

const About: React.FC = () => {
    return (
        <div className="px-10 pb-[150px]">
            <div className="relative py-20 text-center">
                <h2 className="text-5xl font-black">
                    ABOUT
                    <span className="ml-2" style={{color: '#4e54c8'}}>ME</span>
                </h2>
            </div>

            <div className="relative pt-10 pb-20 text-center">
                <h2 className="text-4xl font-black">
                    Personal Information
                </h2>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1">
                    <Description className="ml-[40px] text-xl">
                        Name:
                        <span className="ml-2">최성운</span>
                    </Description>
                    <Description className="ml-[40px] text-xl">
                        Age:
                        <span className="ml-2">2000.02.08</span>
                    </Description>
                    <Description className="ml-[40px] text-xl">
                        Email:
                        <span className="ml-2">hscloud913@naver.com</span>
                    </Description>
                    <Description className="ml-[40px] text-xl">
                        Address:
                        <span className="ml-2">서울시 광진구</span>
                    </Description>
                    <Description className="ml-[40px] text-xl">
                        Education:
                        <span className="ml-2">광운대학교 재학</span>
                    </Description>
                </div>
            </div>


            <div className="relative pt-40 pb-20 text-center">
                <h2 className="text-4xl font-black">
                    License
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-4">
                    <LicenseDescription className="ml-[40px] text-xl">
                        컴퓨터그래픽스운용기능사
                        <br/>
                        <span>(2016.04, 한국산업인력공단)</span>
                    </LicenseDescription>
                    <LicenseDescription className="ml-[40px] text-xl">
                        정보처리기능사
                        <br/>
                        <span>(2017.05, 한국산업인력공단)</span>
                    </LicenseDescription>
                    <LicenseDescription className="ml-[40px] text-xl">
                        전자기능사
                        <br/>
                        <span>(2017.06, 한국산업인력공단)</span>
                    </LicenseDescription>
                    <LicenseDescription className="ml-[40px] text-xl">
                        정보처리기사
                        <br/>
                        <span>(2024.06, 한국산업인력공단)</span>
                    </LicenseDescription>
                </div>
            </div>

            <div className="relative pt-40 pb-20 text-center">
                <h2 className="text-4xl font-black">
                    Honors and Awards
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-4">
                    <AwardsDescription className="ml-[40px] text-xl">
                        게임개발 지방기능경기대회 동메달
                        <br/>
                        <span>(2016.04, 경상북도 기능경기위원회)</span>
                    </AwardsDescription>
                    <AwardsDescription className="ml-[40px] text-xl">
                        게임개발 지방기능경기대회 금메달
                        <br/>
                        <span>(2017.04, 경상북도 기능경기위원회)</span>
                    </AwardsDescription>
                </div>
            </div>
        </div>
    );
};

export default About;