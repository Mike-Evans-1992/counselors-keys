import { getMiddleData } from "@/service/middleService";


export default async function Middle() {
    const data = await getMiddleData();

    return (
        <div className="flex flex-col items-center min-h-[30vh] w-full text-center">
            <p className="italic">"Some random quote here that changes with each month or changes based on what the admin enters in CMS"</p>
            
            <div className="flex flex-col md:flex-row justify-evenly items-center h-[100vh] w-full text-center px-4">
                <div className="flex flex-col justify-center items-center h-full text-center px-4">
                    {/* Top section of pyramid */}
                    <div className="relative w-35 md:w-72 h-40 md:h-72 mt-5 md:mt-10">
                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-0
                                    [clip-path:polygon(50%_0,100%_100%,0_100%)]
                                    bg-black"
                        ></div>

                        {/* Fill layer (white), slightly inset to reveal the border */}
                        <div
                            className="pointer-events-none absolute inset-[4px]
                                [clip-path:polygon(50%_0,100%_100%,0_100%)]
                                bg-white"
                        ></div>

                        {/* Content layer (put anything you want in here) */}
                        <div
                            className="relative z-10 flex h-full w-full items-center justify-center text-center
                                [clip-path:polygon(50%_0,100%_100%,0_100%)]"
                        >
                            <div>
                                <p className="mt-1 text-xl">5%</p>
                            </div>
                        </div>
                    </div>

                    {/* middle section of pyramid */}
                    <div className="relative w-65 md:w-140 h-30 md:h-60 mt-5 md:mt-10">
                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-0
                                    [clip-path:polygon(21%_0,79%_0,100%_100%,0_100%)]
                                    bg-black"
                        ></div>

                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-[4px]
                                    [clip-path:polygon(21%_0,79%_0,100%_100%,0_100%)]
                                    bg-white"
                        ></div>
                        {/* Content layer (put anything you want in here) */}
                        <div
                            className="relative z-10 flex h-full w-full items-center justify-center text-center
                                [clip-path:polygon(24%_0,76%_0,100%_100%,0_100%)]"
                        >
                            <div>
                                <p className="mt-1 text-xl">15%</p>
                            </div>
                        </div>
                    </div>

                    {/* bottom section of pyramid */}
                    <div className="relative w-95 md:w-210 h-30 md:h-60 mt-5 md:mt-10">
                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-0
                                    [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]
                                    bg-black"
                        ></div>

                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-[4px]
                                    [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]
                                    bg-white"
                        ></div>
                        {/* Content layer (put anything you want in here) */}
                        <div
                            className="relative z-10 flex h-full w-full items-center justify-center text-center
                                [clip-path:polygon(24%_0,76%_0,100%_100%,0_100%)]"
                        >
                            <div>
                                <p className="mt-1 text-xl">80%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description of pyramid levels */}
                <div className="flex flex-col justify-start md:justify-evenly text-center md:text-left px-4 h-[100vh] max-w-2xl">
                    <div className="mt-10 mb-5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tier 1: Individual</h2>
                        <ul>
                            <li className="text-lg md:text-xl mb-2">{data.tier1List1}</li>
                            <li className="text-lg md:text-xl mb-2">{data.tier1List2}</li>
                            <li className="text-lg md:text-xl mb-2">{data.tier1List3}</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tier 2: Targeted</h2>
                        <ul>
                            <li className="text-lg md:text-xl mb-2">{data.tier2List1}</li>
                            <li className="text-lg md:text-xl mb-2">{data.tier2List2}</li>
                            <li className="text-lg md:text-xl mb-2">{data.tier2List3}</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tier 3: Universal</h2>
                        <ul>
                            <li className="text-lg md:text-xl mb-2">{data.tier3List1}</li>
                            <li className="text-lg md:text-xl mb-2">{data.tier3List2}</li>
                            <li className="text-lg md:text-xl mb-2">{data.tier3List3}</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}