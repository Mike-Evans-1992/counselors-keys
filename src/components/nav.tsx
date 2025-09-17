import Image from "next/image"
import Link from "next/link"

export default function Nav() {
    return (
        <nav className="bg-red-500 h-30 grid grid-cols-2 grid-rows-1 text-white relative">
            <div className="md:flex md:justify-start md:items-center md:pl-[50px]">
                <Link href="/">
                    <Image
                        src="RCCSlogo.svg"
                        alt="RCCS Logo"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            
            <ul className="
                hidden 
                md:h-full md:flex md:flex-row md:justify-end md:items-center md:gap-8 md:pr-8 md:text-xl">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
            </ul>
        </nav>
    )
}