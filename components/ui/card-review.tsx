'use client';
import { cn } from '@/lib/utils';
import { Heart, Star, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

// export type CardProps = {
//     gap?: number;
//     direction?: 'horizontal' | 'vertical';
//     reverse?: boolean;
//     className?: string;
//     imageUrl: string;
//     title: string;
//     description?: string;
//     price: string;
//     discount?: string;
//     rate: string;
// };

export function CardReview() {

    return (
        <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col gap-0.5 items-start">
                <span className="flex flex-row gap-1 items-start">
                    <Star size={16} fill='#000' />
                    <Star size={16} fill='#000' />
                    <Star size={16} fill='#000' />
                    <Star size={16} />
                    <Star size={16} />
                </span>
                <p className="text-gray-500 text-sm">Kendra - February 24, 2025</p>
            </div>
            <p className="text-gray-500 text-sm">Chocolate / M</p>
            <p className="line-clamp-3">Easily animate elements when they come into view. You can apply animations to elements when they enter the viewport, or when they are fully visible.</p>
            <div className="inline-flex gap-0.5 items-center cursor-pointer">
                <ThumbsUp size={12} />
                <p className="text-sm">Helpful</p>
            </div>
        </div>
    );
}
