'use client';

import { useState, useEffect, useRef } from "react";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

type DropdownButtonProps = {
    options: { label: string, href: string, icon?: React.ReactNode }[];
};

export function DropdownButton({ options }: DropdownButtonProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Ellipsis size={20} />
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 p-2 rounded-2xl shadow-lg z-10">
                    {options.map((option, index) => (
                        <Link key={index} href={option.href} className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-xl items-center inline-flex gap-2">
                            {option.icon}
                            {option.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
