import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-red-500 h-20 grid grid-cols-3 grid-rows-1 text-white px-[50px]">
            <h1 className="text-xl col-start-1 flex justify-start items-center">Meeting Calendar</h1>
            <h1 className="text-xl col-start-2 flex justify-start items-center">Book a Meeting</h1>
            <div className="col-start-3 flex justify-end items-center">
                <Image
                    src="/rams-logo.png"
                    alt="Rams Logo"
                    width={100}
                    height={100}
                />
            </div>
            
        </footer>
    )
}