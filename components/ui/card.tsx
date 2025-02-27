'use client';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { motion, useMotionValue } from 'motion/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
    reverse = false,
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
    const translation = useMotionValue(0);
    const [key] = useState(0);

    useEffect(() => {
    }, [
        key,
        width,
        height,
        gap,
        direction,
        reverse,
    ]);

    return (
        <div className={cn('overflow-hidden max-w-fit', className)}>
            <motion.div
                className='flex'
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
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

                    <Link className='absolute bottom-2 right-2 bg-gray-500 p-2 rounded-full hover:bg-gray-700' href={'#'}>
                        <Heart size={20} className='text-white' />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold line-clamp-2">{title}</h2>
                    {showDescription && description && <p className="text-gray-500">{description}</p>}
                    <p className="text-gray-500 text-sm">({rate})</p>
                    <div className="inline-flex gap-2 items-center">
                        <p className="font-medium text-sm text-gray-500">{price}</p>
                        {discount && <p className="text-gray-500 text-sm font-medium line-through">{discount}</p>}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
