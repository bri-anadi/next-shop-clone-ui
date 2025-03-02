'use client';

import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button";
import { FormSearch } from "@/components/search";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavbarProps = {
    enableScrollEffect?: boolean;
};

export function Navbar({ enableScrollEffect = true }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Check if current page is home
    const isHomePage = pathname === "/";

    useEffect(() => {
        if (!enableScrollEffect) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [enableScrollEffect]);

    // Show FormSearch when:
    // 1. On home page AND scrolled
    // 2. On any other page (regardless of scroll)
    const showFormSearch = (isHomePage && isScrolled) || !isHomePage;

    return (
        <nav className="flex justify-between py-6 mx-auto px-8 md:px-16 fixed top-0 right-0 left-0 bg-white z-10">
            <div className="flex gap-8 items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-600">Shop</Link>
                <Link href="/" className="text-gray-500 hover:text-black hidden md:block">Home</Link>
                <Link href="#" className="text-gray-500 hover:text-black hidden md:block">About</Link>
            </div>
            {showFormSearch && <FormSearch variant="secondary" />}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                    <Link href="#" className="hover:bg-gray-200 rounded-full p-2.5">
                        <Heart size={20} />
                    </Link>
                    <Link href="#" className="hover:bg-gray-200 rounded-full p-2.5">
                        <ShoppingCart size={20} />
                    </Link>
                </div>
                <Button href={"#"} variant="secondary">Sign In</Button>
            </div>
        </nav>
    );
}
