import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

type FormSearchProps = {
    variant?: 'primary' | 'secondary';
};

export function FormSearch({ variant = 'primary' }: FormSearchProps) {
    const variantStyles = variant === 'primary' ? 'left-8' : 'left-6';
    const className = variant === 'primary' ? 'p-2' : '';
    return (
        <div className={cn("rounded-full border backdrop-blur-lg", className)} >
            <span className={cn("absolute left-6 top-1/2 transform -translate-y-1/2", variantStyles)}>
                <Search size={20} className="text-gray-500" />
            </span>
            <input
                id='search'
                type='text'
                className='h-12 md:w-96 rounded-full border border-gray-200 bg-white px-14 outline-none '
                placeholder="Search for products"
            />
        </div>
    );
}
