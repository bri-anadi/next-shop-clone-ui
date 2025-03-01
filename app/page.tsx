import { ShoppingCart, Heart, Search, Store, HomeIcon } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/button";
import { DropdownButton } from "@/components/ui/dropdown";

export default function Home() {

  return (
    <>
      <nav className="flex justify-between py-6 mx-auto px-8 md:px-16 fixed top-0 right-0 left-0 bg-white z-10">
        <div className="flex gap-8 items-center">
          <Link href="#" className="text-2xl font-bold text-indigo-600">Shop</Link>
          <Link href="#" className="text-gray-500 hover:text-black hidden md:block">Home</Link>
          <Link href="#" className="text-gray-500 hover:text-black hidden md:block">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Link href="#" className=" hover:bg-gray-200 rounded-full p-2.5">
              <Heart size={20} />
            </Link>
            <Link href="#" className="hover:bg-gray-200 rounded-full p-2.5">
              <ShoppingCart size={20} />
            </Link>
          </div>
          <Button href={"#"} variant="secondary">Sign In</Button>
        </div>
      </nav>

      <header className="mt-24">
        <div className="flex flex-col gap-4 relative">
          <InfiniteSlider speedOnHover={0.1} speed={24} gap={16}>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
                alt='Dean blunt - Black Metal 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
                alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
                alt='Yung Lean - Stardust'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
                alt='Lana Del Rey - Ultraviolence'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
                alt='A$AP Rocky - Tailor Swif'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
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
          </InfiniteSlider>
          <InfiniteSlider speedOnHover={0.1} speed={24} reverse gap={16}>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
                alt='Dean blunt - Black Metal 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
                alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
                alt='Yung Lean - Stardust'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
                alt='Lana Del Rey - Ultraviolence'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
                alt='A$AP Rocky - Tailor Swif'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
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

          </InfiniteSlider>
          <InfiniteSlider speedOnHover={0.1} speed={24} gap={16}>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
                alt='Dean blunt - Black Metal 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
                alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
                alt='Yung Lean - Stardust'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
                alt='Lana Del Rey - Ultraviolence'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
              <img
                src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
                alt='A$AP Rocky - Tailor Swif'
                className='w-full h-full object-cover hover:scale-110 transition-transform'
              />
              <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Heart size={20} className='text-white' />
              </Link>
              <Link className='absolute bottom-12 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity' href={'#'}>
                <Search size={20} className='text-white' />
              </Link>
            </div>
            <div className="aspect-square w-48 rounded-2xl overflow-hidden relative group">
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
          </InfiniteSlider>
        </div>
        <div className="flex flex-col gap-12 items-center p-4 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="shadow-[0px_0px_112px_280px_#ffffff]"></span>
          <h1 className="text-5xl font-bold text-center text-indigo-600">Shop</h1>
          <div className="p-2 rounded-full border backdrop-blur-lg">
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-gray-500" />
            </span>
            <input
              id='search'
              type='text'
              className='h-12 md:w-96 rounded-full border border-gray-200 bg-white px-14 outline-none '
              placeholder="Search for products"
            />
          </div>
        </div>
      </header>

      <section className="mx-0 sm:mx-24 xl:mx-80 p-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <img src={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} className="w-12 rounded-xl" />
              <div>
                <h1 className="text-xl font-bold">New Arrivals</h1>
                <p className="font-medium">5.3</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center relative">
              <Button href={"#"} className="hidden md:block">Follow</Button>
              <DropdownButton options={[
                { label: "Option 1", href: "#", icon: <HomeIcon size={20} /> },
                { label: "Option 2", href: "#", icon: <Store size={20} /> }
              ]} />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} discount="$24.00" />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <img src={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} className="w-12 rounded-xl" />
              <div>
                <h1 className="text-xl font-bold">New Arrivals</h1>
                <p className="font-medium">5.3</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center relative">
              <Button href={"#"} className="hidden md:block">Follow</Button>
              <DropdownButton options={[
                { label: "Option 1", href: "#" },
                { label: "Option 2", href: "#" },
                { label: "Option 3", href: "#" }
              ]} />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} discount="$24.00" />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
            <Card imageUrl={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} title={"Vibe Check Curvy Stretch Skinny Jeans - Medium Wash"} description={"Aasdad"} price={"$16.99"} rate={"2024"} showDescription={false} />
          </div>
        </div>
      </section>

      <footer className="grid grid-cols-1 md:grid-cols-5 gap-8 py-6 mt-48 mx-auto px-8 md:px-16 bg-white">
        <div className="flex flex-col md:col-span-2 gap-4 items-start">
          <Link href="#" className="text-2xl font-bold text-indigo-600">Shop</Link>
          <p className="max-w-80">Shop is the next step on our mission to make commerce better for everyone.</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="font-semibold">Information</p>
          <Link href="#" className="text-gray-500 hover:text-black">Help Center</Link>
          <Link href="#" className="text-gray-500 hover:text-black">FAQ</Link>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="font-semibold">Social</p>
          <Link href="#" className="text-gray-500 hover:text-black">Facebook</Link>
          <Link href="#" className="text-gray-500 hover:text-black">Twitter</Link>
          <Link href="#" className="text-gray-500 hover:text-black">Instagram</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Legal</p>
          <Link href="#" className="text-gray-500 hover:text-black">Privacy Policy</Link>
          <Link href="#" className="text-gray-500 hover:text-black">Terms of Service</Link>
          <Link href="#" className="text-gray-500 hover:text-black">Contact Us</Link>
        </div>
        <p className="text-gray-500 text-sm">&copy; 2025 Shop. All rights reserved.</p>
      </footer>
    </>
  );
}
