'use client';

import { Star } from "lucide-react";
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
import { DockUI } from "@/components/dock-ui";

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
      <Navbar />

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
        <CardSection />
      </section>
      <DockUI />
      <Footer />
    </>
  );
}
