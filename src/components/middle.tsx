import { getMiddleData } from "@/service/middleService";


export default async function Middle() {
    const data = await getMiddleData();

    return (
        <>
        <div className="grid grid-cols-[.5fr_1fr_.5fr] grid-rows-[150px_1fr_1fr] w-full px-4 gap-4">    
            {/* quote */}
            <div className="col-start-1 row-start-1 flex flex-col justify-end text-right ml-[30px] px-4">
                <p className="italic text-3xl">{data.quote}</p>
                <p className="italic text-2xl">{data.source}</p>
            </div>
            {/* Word of the Month */}
            <div className="col-start-3 row-start-1 flex flex-col">
                <h1 className="text-xl font-bold">Word of the month:</h1>
                <p className="text-2xl italic">Respect</p>
            </div>
            
            {/* pyramid */}
            <div className="col-start-2 row-start-2">   
                <div className="flex flex-col justify-center items-center text-center px-4">
                    {/* Top section of pyramid */}
                    <div className="relative flex flex-row gap-0">
                        {/* title of pyramid section */}
                        <p className="absolute top-10 text-xl right-[25px] w-40 rotate-[-62deg]">Tier 1</p>  
                        {/* format of pyramid + text inside pyramid */}
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
                        {/* description of what section does in real world*/}
                        <ul className="absolute left-[275px] w-80 text-left list-disc">
                            <li className="text-s mb-2">{data.tier1List1}</li>
                            <li className="text-s mb-2">{data.tier1List2}</li>
                            <li className="text-s mb-2">{data.tier1List3}</li>
                        </ul>
                    </div>
                    {/* middle section of pyramid */}
                    <div className="relative flex flex-row gap-0">
                        {/* title of pyramid section */}
                        <p className="absolute top-13 right-[52px] text-xl w-80 rotate-[-65deg]">Tier 2</p>
                        {/* format of pyramid + text inside pyramid */}
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
                        {/* description of what section does in real world */}
                        <ul className="absolute left-[325px] top-5 w-80 text-left list-disc">
                            <li className="text-s mb-2">{data.tier2List1}</li>
                            <li className="text-s mb-2">{data.tier2List2}</li>
                            <li className="text-s mb-2">{data.tier2List3}</li>
                        </ul>
                    </div>

                    {/* bottom section of pyramid */}
                    <div className="relative flex flex-row gap-0">
                        {/* title of pyramid section */}
                        <p className="absolute text-xl top-13 w-80 right-[152px] rotate-[-65deg]">Tier 3</p>
                        {/* format of pyramid + text inside pyramid */}
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
                        {/* description of what section does in real world */}
                        <ul className="absolute left-[375px] top-5 w-80 text-left list-disc">
                            <li className="text-s mb-2">{data.tier3List1}</li>
                            <li className="text-s mb-2">{data.tier3List2}</li>
                            <li className="text-s mb-2">{data.tier3List3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}