'use client';
import { useState } from 'react';
import { AnimatedNumber } from '@/components/ui/animated-number';
import { Minus, Plus } from 'lucide-react';

export function NumberCounter() {
    const [value, setValue] = useState(0);

    return (
        <div className='flex items-center justify-center text-zinc-800 dark:text-zinc-50 bg-gray-200 px-2 rounded-lg gap-4'>
            <button
                aria-label='Decrement'
                onClick={() => setValue((prev) => Math.max(0, prev - 1))}
                disabled={value === 0}
                className={value === 0 ? 'opacity-50 cursor-not-allowed' : ''}
            >
                <Minus className='h-4 w-4' />
            </button>
            <AnimatedNumber
                className='inline-flex items-center font-mono text-2xl font-light'
                springOptions={{
                    bounce: 0,
                    duration: 1000,
                }}
                value={value}
            />
            <button
                aria-label='Increment'
                onClick={() => setValue((prev) => prev + 1)}
            >
                <Plus className='h-4 w-4' />
            </button>
        </div>
    );
}
