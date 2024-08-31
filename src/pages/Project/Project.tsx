import React from 'react';

const Project: React.FC = () => {
    return (
        <div className="px-10 pb-[150px]">
            <div className="relative py-20 text-center">
                <h2 className="text-5xl font-black">
                    MY
                    <span className="ml-2" style={{color: '#4e54c8'}}>PROJECT</span>
                </h2>
            </div>

            <div className="flex flex-wrap max-w-[350px] md:max-w-[716px] lg:max-w-[1082px] mx-auto gap-4">

                <div
                    className="flex-1 min-w-[250px] max-w-[530px] md:min-w-[530px] md:max-w-[530px] card animated-box in">
                    <div className="border border-2 border-gray-600 p-6" style={{borderRadius: '5px'}}>
                        <div className="flex mb-5">
                            Game
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[530px] md:min-w-[530px] md:max-w-[530px] card animated-box in">
                    <div className="border border-2 border-gray-600 p-6" style={{borderRadius: '5px'}}>
                        <div className="flex mb-5">
                            Nebula
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[530px] md:min-w-[530px] md:max-w-[530px] card animated-box in">
                    <div className="border border-2 border-gray-600 p-6" style={{borderRadius: '5px'}}>
                        <div className="flex mb-5">
                            디스크 복제/백업/삭제 프로그램
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[530px] md:min-w-[530px] md:max-w-[530px] card animated-box in">
                    <div className="border border-2 border-gray-600 p-6" style={{borderRadius: '5px'}}>
                        <div className="flex mb-5">
                            Samsung Data Migration
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[530px] md:min-w-[530px] md:max-w-[530px] card animated-box in">
                    <div className="border border-2 border-gray-600 p-6" style={{borderRadius: '5px'}}>
                        <div className="flex mb-5">
                            Electron + Angular
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[530px] md:min-w-[530px] md:max-w-[530px] card animated-box in">
                    <div className="border border-2 border-gray-600 p-6" style={{borderRadius: '5px'}}>
                        <div className="flex mb-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;