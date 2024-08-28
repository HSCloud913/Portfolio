import React from 'react';
import {Hexagon, TimelineContainer, Timestamp, Title, Content} from "./CareerStyle.tsx"

const Career: React.FC = () => {
    return (
        <div className="px-10 pb-[150px]">
            <div className="relative py-20 text-center">
                <h2 className="text-5xl font-black">
                    MY
                    <span className="ml-2" style={{color: '#4e54c8'}}>CAREER</span>
                </h2>
            </div>

            <div className="flex flex-wrap max-w-[350px] md:max-w-[716px] lg:max-w-[1082px] mx-auto gap-4 justify-center">
                <Title className="flex-1 min-w-[350px] max-w-[500px] border border-2 border-gray-600 p-6 rounded-lg">
                    <div className="flex mb-16 mx-auto justify-center">
                        <Hexagon>
                            <i className="fas fa-graduation-cap text-3xl text-white" />
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">Education</p>
                    </div>

                    <TimelineContainer>
                        <ul>
                            <li>
                                <Timestamp>
                                    2016.04
                                </Timestamp>
                                <Title>
                                    게임개발 지방기능경기대회 (기능경기위원회)
                                </Title>
                                <Content>
                                    게임개발 프로그래밍 부분 동메달 수상 (2인 1조)
                                </Content>
                                <br/>
                                <br/>
                                <br/>
                            </li>
                            <li>
                                <Timestamp>
                                2016.06
                                </Timestamp>
                                <Title>
                                    게임프로그래밍 과정 (SBS 게임아카데미)
                                </Title>
                                <Content>
                                    C/C++ 언어의 심화학습 및 윈도우 프로그래밍 개발에 대한 전반적인 이해를 하게 되었습니다.
                                </Content>
                                <Content>
                                    DirectX의 활용법과 2D, 3D 프로그래밍 개발 기술을 습득하여 2D와 2.5D(Quarter view)게임을 제작할 수 있게 되었습니다.
                                </Content>
                                <br/>
                                <br/>
                                <br/>
                            </li>
                            <li>
                                <Timestamp>
                                2017.04
                                </Timestamp>
                                <Title>
                                    게임개발 지방기능경기대회 (기능경기위원회)
                                </Title>
                                <Content>
                                    게임개발 프로그래밍 부분 금메달 수상 (2인 1조)
                                </Content>
                                <br/>
                                <br/>
                                <br/>
                            </li>
                            <li>
                                <Timestamp>
                                    2018.02
                                </Timestamp>
                                <Title>
                                    구미전자공업고등학교 졸업
                                </Title>
                                <Content>
                                    전자회로설계전공
                                </Content>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </li>
                            <li>
                                <Timestamp>
                                2022.03
                                </Timestamp>
                                <Title>
                                    광운대학교 입학
                                </Title>
                                <Content>
                                    정보콘텐츠학과
                                </Content>
                                <br/>
                                <br/>
                                <br/>
                            </li>
                            <li>
                                <Timestamp>
                                2026.02
                                </Timestamp>
                                <Title>
                                    광운대학교 졸업 예정
                                </Title>
                            </li>
                        </ul>
                    </TimelineContainer>
                </Title>

                <Title className="flex-1 min-w-[350px] max-w-[500px] border border-2 border-gray-600 p-6 rounded-lg">
                    <div className="flex mb-16 mx-auto justify-center">
                        <Hexagon>
                            <i className="fas fa-building text-3xl text-white"/>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">Company</p>
                    </div>

                    <TimelineContainer>
                        <ul>
                            <li>
                                <Timestamp>
                                    2017.09
                                </Timestamp>
                                <Title>
                                    (주) 클로닉스 입사
                                </Title>
                                <Content>
                                    개발팀 사원
                                </Content>
                            </li>
                            <li>
                                <Timestamp>
                                    2017.10
                                </Timestamp>
                                <Title>
                                    REST 통신 DLL 개발
                                </Title>
                                <Content>
                                    cpprestsdk를 활용한 REST 통신 DLL 개발을 담당했습니다.
                                </Content>
                                <Content>
                                    협업과 모듈화에 용이한 DLL(Dinamic linked library)에 대한 이해와 업계에서 폭넓게 활용되는 REST(Representational state transfer) 통신의 동작 방식을 숙지하게 되었습니다.
                                </Content>
                            </li>
                            <li>
                                <Timestamp>
                                    2017.12
                                </Timestamp>
                                <Title>
                                    IPC(Named Pipe) 통신 DLL 개발
                                </Title>
                                <Content>
                                    IPC 통신에는 pipe, named pipe, message queue, shared memory, semaphore 등이 있으며 그 중 named pipe를 이용하여 프로그램 간 통신을 할 수 있는 DLL 개발을 담당했습니다.
                                </Content>
                                <Content>
                                    자사 제품들간 통신을 해야하는 상황에서 통신을 할 프로세스를 명확히 알 때와 부모 자식간 통신이 아닌 전혀 다른 프로세스간 통신에서 유용한 named pipe를 활용하여 ipc의 동작 방식을 숙지하게 되었습니다.
                                </Content>
                            </li>
                            <li>
                                <Timestamp>
                                    2018
                                </Timestamp>
                                <Title>
                                    통합 설치/패치 클라이언트 개발
                                </Title>
                                <Content>
                                    파편화 되어있던 자사 제품들의 설치/패치 방식을 일관성 있게 관리하기 위해 MFC를 사용하여 통합 패치 클라이언트 개발을 담당했습니다.
                                </Content>
                                <Content>
                                    REST 통신 DLL을 통해 서버에서 설치/패치할 제품 정보를 json 형태로 전달 받은뒤 install shield를 사용하는 제품은 silent mode로 진행하고 나머지 제품들은 수동으로 진행하며 동작이 종료되면 서버로 결과를 전송하는 형식으로 개발했습니다.
                                    제품들의 버전 관리, 패치 방법, 기본적인 서버와 클라이언트 간의 연동에 관해 알게되었습니다.
                                </Content>
                            </li>
                            <li>
                                <Timestamp>
                                    2019
                                </Timestamp>
                                <Title>
                                    ARM 환경 디스크 백업/복원 소프트웨어 유지 보수 및 추가 개발
                                </Title>
                                <Content>
                                    ARM 환경 삼성 PC와 노트북 생산에 들어갈 OS 초기 이미지 백업 및 복원를 하기 위한 MFC 프로그램의 유지 보수 및 추가 개발을 담당했습니다.
                                </Content>
                                <Content>
                                    백업/복원 소프트웨어의 경우 백업은 일반적인 윈도우 환경에서 동작이 가능하지만 복원은 Windows PE(Preinstall enviroment) 환경에서 동작하기 때문에 삼성에서 커스텀한 ARM용 Windows PE에서 작업을 진행했습니다.
                                    Windows PE, ARM 환경에 대한 이해와 FAT32, NTFS 파일 시스템의 구조에 대해 알게되었습니다.
                                </Content>
                            </li>
                            <li>
                                <Timestamp>
                                    2021
                                </Timestamp>
                                <Title>
                                    디스크 복제/백업/삭제 소프트웨어 WebApp 버전 개발
                                </Title>
                                <Content>
                                    Electron과 Angular를 활용하여 프론트엔드 UI를 제작하고 디스크 복제/백업/삭제 동작을 위한 c++ service 개발을 담당했습니다.
                                </Content>
                                <Content>
                                    10년 이상 유지보수 되던 C++ builder 32bit 환경에서 호환성 이슈가 자주 발생하여 새로운 프로젝트로 Electron과 Angular로 프론트엔드 UI를 제작하고 UI에서 REST 통신을 통해 service로 디스크 관련 동작을 전송하는 형식으로 개발했습니다.
                                    프로젝트를 진행하면서 높은 생산속도와 Web Browser 환경, Desktop 환경을 동일하게 개발 가능한 장점도 있었지만 기본 용량이 크고 native 앱에 비해 빌드가 복잡하다는등 electron의 장단점에 대해 알게되었습니다.
                                </Content>
                            </li>
                            <li>
                                <Timestamp>
                                    2022
                                </Timestamp>
                                <Title>
                                    Windows/Linux 크로스플랫폼 개발
                                </Title>
                                <Content>
                                    WebApp으로 제품을 개발하고 유지 보수를 진행하던 도중, 디스크 보안 삭제를 지원하기 위해 Linux application이 필요해져서 크로스플랫폼 개발이 용이한 qml 개발을 담당했습니다.
                                </Content>
                                <Content>
                                    qml에 mvvm(model-view-viewmodel) 구조를 적용하게 되어 의존성 주입을 통한 유닛 테스트가 간편한 환경을 구축하고, docker를 통해 linux 빌드 환경을 제작하는 방법에 대해 알게되었습니다.
                                </Content>
                            </li>
                        </ul>
                    </TimelineContainer>
                </Title>
            </div>
        </div>
    );
};

export default Career;