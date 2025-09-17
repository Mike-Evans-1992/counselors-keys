
import { getHeroIntro } from '@/service/heroService';
import { get } from 'http';
import Image from 'next/image';

export default async function Hero() {
    const intro = await getHeroIntro();

    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center min-h-[85vh] w-full text-center px-4">
            <div className="ml-4 h-[300px] md:h-[600px] w-[250px] md:w-[500px] rounded-full shadow-2xl shadow-purple-800/40 overflow-hidden md:order-2">
                <Image 
                    src="/mama.jpg" 
                    alt="Avatar" 
                    width={400} 
                    height={500} 
                    className="h-full w-full object-cover inset-30 gradient-to-br from transparent to-black-800/30"
                />
            </div>
            <div className="flex flex-col md:order-1 justify-center items-center h-full text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{intro.heading}</h1>
                <p className="text-lg md:text-2xl mb-6 max-w-2xl">
                    {intro.blurb1}
                </p>
                <p className="text-md md:text-xl text-gray-600 max-w-2xl">
                    {intro.blurb2}
                </p>
            </div>
        </div>
    )
}