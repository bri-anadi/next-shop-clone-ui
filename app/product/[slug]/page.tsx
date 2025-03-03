import { Button } from "@/components/button";
import { CarouselCustomIndicator } from "@/components/carousel-indicator";
import { NumberCounter } from "@/components/number-counter";
import { DropdownButton } from "@/components/ui/dropdown";
import { Navbar } from "@/components/ui/navbar";
import { Heart, HomeIcon, Link2, Star } from "lucide-react";
import Link from "next/link";
import { ProductDescription } from "./page-description";
import { CardReview } from "@/components/ui/card-review";
import { Footer } from "@/components/ui/footer";
import { CardSection } from "@/components/ui/card-section";

export default function Product() {

    return (
        <>
            <Navbar enableScrollEffect={false} />
            <section className="mt-24 mx-0 sm:mx-24 xl:mx-80 p-8 flex flex-col">
                <div className="grid md:grid-cols-8 gap-4">
                    <div className="md:col-span-5">
                        <CarouselCustomIndicator />
                    </div>
                    <div className="md:col-span-3">
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
                            <div className='border p-2.5 h-fit w-fit rounded-full hover:bg-gray-300 cursor-pointer'>
                                <Heart />
                            </div>
                        </div>
                        <p className="text-lg font-semibold">$10.29</p>
                        <div className="inline-flex items-center w-full my-4">
                            <p className="my-4 font-medium flex-1">Quantity</p>
                            <NumberCounter />
                        </div>
                        <div className="flex flex-col gap-2 text-center font-semibold">
                            <Button href={"#"} className="py-3 w-full">
                                Add to cart
                            </Button>
                            <Button href={"#"} className="py-2.5 w-full" variant="secondary">
                                Buy now
                            </Button>
                        </div>

                        <div className="my-4">
                            <p className="text-lg font-semibold">Description</p>
                            <ProductDescription title={"Product Details"} description={"Model Height: 6'1 - Waist: 32 - Wearing Large  Big & Tall: Height 6'3 - Waist: 42 - Wearing XXXL <br/> Available In Black, Grey, White, Navy, And Red 60% Cotton, 40% Polyester Disclaimer: Due To The Specialized Distressing & Wash Process, Each Garment Is Unique. Elastic Waist With Drawstring Side Hand Pockets Back Patch Pocket Ribbed Cuff At Bottom Of Leg Imported"} buttonName={"View more"} />
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
                </div>
                <div className="md:grid md:grid-cols-8">
                    <div className="md:col-span-5">
                        <p className="text-lg font-semibold my-4">Rating and Reviews</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex gap-2 items-center">
                                    <p className="text-4xl font-semibold">4.6</p>
                                    <Star fill='#000' />
                                </div>
                                <Link href={"#"} className="text-gray-500 text-sm underline">11.8k ratings</Link>
                                <div className="flex flex-col items-center">
                                    <div className="flex w-full items-center gap-2">
                                        <span className="font-semibold">5</span>
                                        <div className="w-full h-2 bg-gray-200 rounded-full">
                                            <div className="w-2/3 h-full text-center text-xs text-white bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center gap-2">
                                        <span className="font-semibold">4</span>
                                        <div className="w-full h-2 bg-gray-200 rounded-full">
                                            <div className="w-1/3 h-full text-center text-xs text-white bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center gap-2">
                                        <span className="font-semibold">3</span>
                                        <div className="w-full h-2 bg-gray-200 rounded-full">
                                            <div className="w-1/3 h-full text-center text-xs text-white bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center gap-2">
                                        <span className="font-semibold">2</span>
                                        <div className="w-full h-2 bg-gray-200 rounded-full">
                                            <div className="w-0 h-full text-center text-xs text-white bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center gap-2">
                                        <span className="font-semibold">1</span>
                                        <div className="w-full h-2 bg-gray-200 rounded-full">
                                            <div className="w-0 h-full text-center text-xs text-white bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardReview />
                            <CardReview />
                            <CardReview />
                        </div>
                        <ProductDescription className="flex mt-4 bg-gray-200 rounded-lg py-2 items-center justify-center" title={"Rating and Reviews"} description={""} buttonName={"Read more reviews"} />
                    </div>
                </div>
                <div className="my-12">
                    <div>
                        <h1 className="mb-4 text-2xl font-bold">Related to New Arrival</h1>
                        <div className="flex flex-col gap-8">
                            <CardSection />
                            <CardSection />
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
}
