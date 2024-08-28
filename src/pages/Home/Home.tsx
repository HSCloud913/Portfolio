import React, {useState, useEffect} from 'react';
import {Container, Stars, Star} from './HomeStyle.tsx'

const randomRange = (min: number, max: number) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};

const Home: React.FC = () => {
    const starCount = 30;
    const [stars, setStars] = useState([]);

    const generateStars = ((starCount: any) => {
        return Array.from({length: starCount}).map(() => {
            return {
                starTailLength: `${randomRange(500, 750) / 100}em`,
                topOffset: `${randomRange(0, 10000) / 100}vh`,
                fallDuration: `${randomRange(6000, 12000) / 1000}s`,
                fallDelay: `${randomRange(0, 10000) / 1000}s`,
            };
        });
    })

    useEffect(() => {
        const generatedStars = generateStars(starCount);
        // @ts-ignore
        setStars(generatedStars);
    }, [starCount]);

    return (
        <>
            <Container>
                <Stars>
                    {stars.map((starProps, index) => (
                        <Star
                            key={index}
                            starTailLength={starProps.starTailLength}
                            topOffset={starProps.topOffset}
                            fallDuration={starProps.fallDuration}
                            fallDelay={starProps.fallDelay}
                        />
                    ))}
                </Stars>

                <div className="absolute mx-auto left-10 right-10 lg:left-40 lg:right-auto lg:w-[900px]" style={{top: '30%'}}>
                    <div className="relative text-center lg:text-left">
                        <h2 className="text-4xl lg:text-6xl font-black">
                            C++/C#
                            <span className="lg:ml-4 block lg:inline" style={{color: '#4e54c8'}}>DEVELOPER</span>
                        </h2>
                    </div>

                    <div className="mt-20" style={{wordBreak: 'keep-all'}}>
                        <p className="text-xl lg:text-3xl">안녕하세요. 7년차 개발자 최성운 입니다.</p>
                        <br/>
                        <p className="text-base lg:text-xl">C++ 및 C#을 주로 사용하는 소프트웨어 개발자로, 다양한 프로젝트에서 경험을 쌓았습니다.</p>
                        <p className="text-base lg:text-xl">최신 기술 트렌드를 반영한 효율적인 코드 작성과 문제 해결 능력을 바탕으로, 복잡한 소프트웨어 문제를 해결하고 성과를 창출하는 데
                            열정을 가지고 있습니다.</p>
                        <br/>
                        <p className="text-base lg:text-xl">현재 C++/C# 개발자로 구직중입니다.</p>
                        <br/>
                        <p className="text-base lg:text-xl">회사와 제가 같이 발전해 나갈 수 있는 성장 동력이 가득하고 도전적인 회사에서 일하고 싶습니다.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;