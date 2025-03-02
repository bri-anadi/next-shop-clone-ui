'use client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNavigation,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ITEMS = new Array(4).fill(null).map((_, index) => index + 1);

export function CarouselCustomIndicator({ className }: { className?: string }) {
    const [index, setIndex] = useState(0);

    return (
        <div className={cn('relative w-full py-8', className)}>
            <Carousel index={index} onIndexChange={setIndex}>
                <CarouselContent className='relative'>
                    {ITEMS.map((item) => {
                        return (
                            <CarouselItem key={item} className='p-4'>
                                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                    {item}
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselNavigation
                    className='hidden md:flex absolute -bottom-16 left-auto top-auto w-full justify-end gap-2'
                    classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
                    alwaysShow
                />
            </Carousel>
            <div className='hidden md:flex w-full space-x-3 px-4'>
                {ITEMS.map((item) => {
                    return (
                        <button
                            key={item}
                            type='button'
                            aria-label={`Go to slide ${item}`}
                            onClick={() => setIndex(item - 1)}
                            className='h-12 w-12 border border-zinc-200 dark:border-zinc-800'
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
