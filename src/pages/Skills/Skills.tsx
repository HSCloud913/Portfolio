import React from 'react';
import {Hexagon, CardDescriptions} from "./SkillsStyle";
import './SkillsColor.css'

const Skills: React.FC = () => {
    return (
        <div className="px-10 pb-[150px]">
            <div className="relative py-20 text-center">
                <h2 className="text-5xl font-black">
                    MY
                    <span className="ml-2" style={{color: '#4e54c8'}}>SKILLS</span>
                </h2>
            </div>

            <div className="relative pt-10 pb-10 text-center">
                <h2 className="text-4xl font-black">
                    Programing Languages
                </h2>
            </div>

            <div className="flex flex-wrap max-w-[350px] md:max-w-[716px] lg:max-w-[1082px] mx-auto gap-4">
                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg">
                    <div className="flex mb-5">
                        <Hexagon className={'color-c'}>
                            <svg aria-labelledby="simpleicons-c-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-c-icon">C icon</title>
                                <path
                                    d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">C</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-cpp'}>
                            <svg aria-labelledby="simpleicons-cpp-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-cpp-icon">C++ icon</title>
                                <path
                                    d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">C++</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-cpp'}>
                            <svg aria-labelledby="simpleicons-cpp-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-csharp-icon">C# icon</title>
                                <path
                                    d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">C#</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>
            </div>

            {/* Web */}
            <div className="relative pt-20 pb-10 text-center">
                <h2 className="text-4xl font-black">
                    Web
                </h2>
            </div>

            <div className="flex flex-wrap max-w-[1082px] mx-auto  gap-4">
                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-html'}>
                            <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-sass-icon">HTML icon</title>
                                <path
                                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">HTML 5</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-css'}>
                            <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-sass-icon">CSS icon</title>
                                <path
                                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">CSS 3</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-sass'}>
                            <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-sass-icon">Sass icon</title>
                                <path
                                    d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">Sass</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-ts'}>
                            <svg aria-labelledby="simpleicons-ts-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-sass-icon">TypeScript icon</title>
                                <path
                                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">JavaScript</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-ts'}>
                            <svg aria-labelledby="simpleicons-ts-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                            <title id="simpleicons-sass-icon">TypeScript icon</title>
                                <path
                                    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">TypeScript</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>
            </div>

            {/* Etc */}
            <div className="relative pt-20 pb-10 text-center">
                <h2 className="text-4xl font-black">
                    ETC
                </h2>
            </div>

            <div className="flex flex-wrap max-w-[1082px] mx-auto  gap-4">
                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-html'}>
                            <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-git-icon">Git icon</title>
                                <path
                                    d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">Git</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-css'}>
                            <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-sass-icon">JIRA icon</title>
                                <path
                                    d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">JIRA</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>

                <div
                    className="flex-1 min-w-[250px] max-w-[350px] md:min-w-[350px] md:max-w-[350px] p-6 border border-2 border-gray-600 rounded-lg shadow">
                    <div className="flex mb-5">
                        <Hexagon className={'color-sass'}>
                            <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title id="simpleicons-docker-icon">Docker icon</title>
                                <path
                                    d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
                            </svg>
                        </Hexagon>
                        <p className="self-center mx-5 text-xl font-bold">Docker</p>
                    </div>

                    <CardDescriptions>
                        <li>
                            aaa
                        </li>
                        <li>
                            bbb
                        </li>
                        <li>
                            ccc
                        </li>
                    </CardDescriptions>
                </div>
            </div>
        </div>
    );
};

export default Skills;