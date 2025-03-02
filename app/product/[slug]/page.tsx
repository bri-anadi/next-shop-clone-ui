import { Button } from "@/components/button";
import { CarouselCustomIndicator } from "@/components/carousel-indicator";
import { DropdownButton } from "@/components/ui/dropdown";
import { Navbar } from "@/components/ui/navbar";
import { Heart, HomeIcon, Link2, Star } from "lucide-react";
import Link from "next/link";

export default function Product() {

    return (
        <>
            <Navbar enableScrollEffect={false} />
            <section className="mt-24 mx-0 sm:mx-24 xl:mx-80 p-8 flex flex-col">
                <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-5 ">
                        <CarouselCustomIndicator />
                    </div>
                    <div className="col-span-3 ">
                        <div className="flex flex-row justify-between items-center">
                            <Link href={"#"}>
                                <div className="flex flex-row gap-2 items-center">
                                    <img src={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} className="w-12 rounded-xl" />
                                    <h1 className="font-bold">New Arrivals</h1>
                                </div>
                            </Link>
                            <DropdownButton options={[
                                { label: "Option 1", href: "#", icon: <HomeIcon size={20} /> }
                            ]} />
                        </div>
                        <div className="flex flex-row my-4">
                            <div className="w-full">
                                <h1 className="text-2xl font-bold">Product Name</h1>
                                <p className="font-medium inline-flex items-center gap-1">
                                    <Star size={16} fill='#000' />
                                    <Star size={16} fill='#000' />
                                    <Star size={16} fill='#000' />
                                    <Star size={16} />
                                    <Star size={16} />
                                    (110 ratings)
                                </p>
                            </div>
                            <div className='border p-2.5 h-fit w-fit rounded-full hover:bg-gray-300'>
                                <Heart />
                            </div>
                        </div>
                        <p className="text-lg font-semibold">$10.29</p>
                        <p className="text-lg my-4">This is the product page</p>
                        <div className="flex flex-col gap-2 text-center font-semibold">
                            <Button href={"#"} className="py-4 w-full">
                                Add to cart
                            </Button>
                            <Button href={"#"} className="py-4 w-full" variant="secondary">
                                Buy now
                            </Button>
                        </div>

                        <div className="my-4">
                            <p className="text-lg font-semibold">Description</p>
                            <p className="line-clamp-4">This is the product page</p>
                        </div>

                        <div className="flex flex-col gap-2 text-center font-medium">
                            <Button href={"#"} className="w-full inline-flex justify-center gap-2" variant="secondary">
                                <Link2 />
                                More Details
                            </Button>
                            <Button href={"#"} className="w-full" variant="secondary">
                                Refund Policy
                            </Button>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}
