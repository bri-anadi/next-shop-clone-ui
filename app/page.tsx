'use client'

import { Heart, Store, HomeIcon, Search, Star } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Link from "next/link";
import { FormSearch } from "@/components/search";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/button";
import { DropdownButton } from "@/components/ui/dropdown";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CardSection } from "@/components/ui/card-section";
import { CardHeader } from "@/components/ui/card-header";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar enableScrollEffect={true} />

      <header className="mt-24">
        <div className="flex flex-col-reverse gap-4 md:relative">
          <InfiniteSlider speedOnHover={0.1} speed={24} gap={16}>
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
          </InfiniteSlider>
          <InfiniteSlider speedOnHover={0.1} speed={24} reverse gap={16}>
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
          </InfiniteSlider>
          <InfiniteSlider speedOnHover={0.1} speed={24} gap={16}>
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
          </InfiniteSlider>
          <div className="flex flex-col gap-12 items-center p-4 md:absolute md:top-1/3 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <span className="shadow-[0px_0px_112px_280px_#ffffff]"></span>
            <h1 className="text-5xl font-bold text-center text-indigo-600">Shop</h1>
            {!isScrolled && <FormSearch />}
          </div>
        </div>
      </header>

      <section className="mx-0 sm:mx-24 xl:mx-80 p-8 flex flex-col gap-12">
        <CardSection />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <Link href={"#"}>
              <div className="flex flex-row gap-4 items-center">
                <img src={"https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"} className="w-12 rounded-xl" />
                <div>
                  <h1 className="text-xl font-bold">New Arrivals</h1>
                  <p className="font-medium inline-flex items-center gap-1">
                    5.0
                    <Star size={12} fill='#000' />
                    (100)
                  </p>
                </div>
              </div>
            </Link>
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
      <Footer />
    </>
  );
}
