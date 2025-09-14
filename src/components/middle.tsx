import { getMiddleData } from "@/service/middleService";


export default async function Middle() {
    const data = await getMiddleData();

    return (
        <>
        <div className="grid grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 w-full p-4">    
            {/* quote */}
            <div className="col-start-1 row-start-1 flex justify-end">
                <p className="italic w-70">{data.quote}</p>
            </div>
            
            {/* pyramid */}
            <div className="col-start-2 row-start-2">   
                <div className="flex flex-col justify-center items-center text-center px-4">  
                    {/* Top section of pyramid */}
                    <div className="relative w-20 md:w-30 h-40 md:h-30">
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
                                bg-red-100"
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
                    <div className="relative w-65 md:w-55 h-30 md:h-25 mt-5 md:mt-5">
                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-0
                                    [clip-path:polygon(21%_0,79%_0,100%_100%,0_100%)]
                                    bg-black"
                        ></div>

                        {/*Fill layer slightly inset*/}
                        <div
                            className="pointer-events-none absolute inset-[4px]
                                    [clip-path:polygon(21%_0,79%_0,100%_100%,0_100%)]
                                    bg-yellow-100"
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
                    <div className="relative w-95 md:w-80 h-30 md:h-25 mt-5 md:mt-5">
                        {/*Border layer (black)*/}
                        <div
                            className="pointer-events-none absolute inset-0
                                    [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]
                                    bg-black"
                        ></div>

                        {/*Fill layer slightly inset*/}
                        <div
                            className="pointer-events-none absolute inset-[4px]
                                    [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]
                                    bg-green-100"
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
            </div>

            {/* Description of pyramid levels */}
            <div className="col-start-3 row-start-2">
                <div>
                    <h2 className="text-sm font-bold mb-3">Tier 1: Individual</h2>
                    <ul className="mb-6">
                        <li className="text-xs mb-2">- {data.tier1List1}</li>
                        <li className="text-xs mb-2">- {data.tier1List2}</li>
                        <li className="text-xs mb-2">- {data.tier1List3}</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="text-sm font-bold mb-3">Tier 2: Targeted</h2>
                    <ul>
                        <li className="text-xs mb-2">- {data.tier2List1}</li>
                        <li className="text-xs mb-2">- {data.tier2List2}</li>
                        <li className="text-xs mb-2">- {data.tier2List3}</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-3">Tier 3: Universal</h2>
                    <ul>
                        <li className="text-xs mb-2">- {data.tier3List1}</li>
                        <li className="text-xs mb-2">- {data.tier3List2}</li>
                        <li className="text-xs mb-2">- {data.tier3List3}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}