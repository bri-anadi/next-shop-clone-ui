'use client';
import { cn } from '@/lib/utils';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

export type CardProps = {
    gap?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
    imageUrl: string;
    title: string;
    description?: string;
    price: string;
    discount?: string;
    rate: string;
    showDescription?: boolean;
};

export function Card({
    gap = 8,
    direction = 'vertical',
    className,
    imageUrl,
    title,
    description,
    price,
    discount,
    rate,
    showDescription = true,
}: CardProps) {
    const [ref, { width, height }] = useMeasure();
    const [mounted, setMounted] = useState(false);

    // Handle client-side only rendering for hydration
    useState(() => {
        setMounted(true);
    });

    return (
        <div className={cn('overflow-hidden max-w-fit group', className)}>
            <Link href={`/product/${title.toLowerCase()}`} legacyBehavior>
                <a className="block">
                    <div
                        className='flex'
                        style={{
                            gap: `${gap}px`,
                            flexDirection: direction === 'horizontal' ? 'row' : 'column',
                        }}
                        ref={ref}
                    >
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={`${title}`}
                                    className='w-full h-full object-cover hover:scale-110 transition-transform'
                                />
                            </div>

                            <div className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700'>
                                <Heart size={20} className='text-white' />
                            </div>
                            {discount &&
                                <div className='absolute top-2 left-2 bg-black px-2 py-0.5 rounded-md text-white text-xs font-medium'>
                                    40% off
                                </div>}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold line-clamp-2">{title}</h2>
                            {showDescription && description && <p className="text-gray-500">{description}</p>}
                            <div className="flex flex-row gap-1 items-center">
                                <span className="flex flex-row gap-1 items-center">
                                    <Star size={12} fill='#000' />
                                    <Star size={12} fill='#000' />
                                    <Star size={12} fill='#000' />
                                    <Star size={12} />
                                    <Star size={12} />
                                </span>
                                <p className="text-gray-500 text-sm">({rate})</p>
                            </div>
                            <div className="inline-flex gap-2 items-center">
                                <p className="font-medium text-sm text-gray-500">{price}</p>
                                {discount && <p className="text-gray-500 text-sm font-medium line-through">{discount}</p>}
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
