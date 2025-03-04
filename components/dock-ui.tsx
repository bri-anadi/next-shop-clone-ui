import {
    HomeIcon,
    Search,
    ShoppingCart,
    User2,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
    {
        title: 'Home',
        icon: (
            <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#',
    },
    {
        title: 'Search',
        icon: (
            <Search className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#',
    },
    {
        title: 'Shopping Cart',
        icon: (
            <ShoppingCart className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#',
    },
    {
        title: 'Profile',
        icon: (
            <User2 className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#',
    },
];

export function DockUI() {
    return (
        <div className='md:hidden fixed bottom-0 bg-gray-50 w-screen'>
            <Dock className='items-end pb-3'>
                {data.map((item, idx) => (
                    <DockItem
                        key={idx}
                        className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                    >
                        <DockLabel>{item.title}</DockLabel>
                        <DockIcon>{item.icon}</DockIcon>
                    </DockItem>
                ))}
            </Dock>
        </div>
    );
}
