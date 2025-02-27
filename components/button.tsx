import Link from "next/link";
import { cn } from '@/lib/utils';

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
};

export function Button({
    href,
    children,
    variant = 'primary',
    className,
}: ButtonProps) {
    const baseStyles = 'border px-4 py-1.5 rounded-xl duration-500';
    const variantStyles = variant === 'primary'
        ? 'bg-indigo-500 text-white hover:bg-indigo-600'
        : 'bg-gray-200 text-black hover:bg-gray-300';

    return (
        <Link href={href} className={cn(baseStyles, variantStyles, className)}>
            {children}
        </Link>
    );
}
