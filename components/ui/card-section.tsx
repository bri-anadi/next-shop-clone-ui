import { HomeIcon, Star, Store } from "lucide-react";
import { Button } from "../button";
import { Card } from "./card";
import { DropdownButton } from "./dropdown";
import Link from "next/link";

export async function CardSection() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <Link href={"#"}>
                    <div className="flex flex-row gap-4 items-center">
                        <img src={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} className="w-12 rounded-xl" />
                        <div>
                            <h1 className="text-xl font-bold">New Arrivals</h1>
                            <p className="font-medium inline-flex items-center gap-1">
                                4.2
                                <Star size={12} fill='#000' />
                                (110)
                            </p>
                        </div>
                    </div>
                </Link>
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
    );
}
