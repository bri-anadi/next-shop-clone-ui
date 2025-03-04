import { Heart, Search } from "lucide-react";
import Link from "next/link";

export function CardHeader() {
    return (
        <Link href={'https://google.com'} className="cursor-pointer" legacyBehavior>
            <div className="aspect-square size-32 md:size-48 rounded-2xl overflow-hidden relative group">
                <img
                    src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
                    alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
                    className='w-full h-full object-cover hover:scale-110 transition-transform'
                />
                <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                    <Heart size={20} className='text-white' />
                </Link>
                <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                    <Search size={20} className='text-white' />
                </Link>
            </div>
        </Link>
    );
}
