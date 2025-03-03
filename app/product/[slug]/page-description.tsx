'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductDescriptionProps = {
    title: string;
    description: string;
    buttonName: string;
    className?: string;
};

export function ProductDescription({ title, description, buttonName, className }: ProductDescriptionProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className={cn("relative", className)}>
                <p className="line-clamp-4">
                    {description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < description.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </p>
                <button
                    onClick={() => setShowModal(true)}
                    className="text-black text-sm font-medium">
                    {buttonName}
                </button>
            </div>

            <Dialog open={showModal} onOpenChange={setShowModal} >
                <DialogContent className="sm:max-w-md p-6 fixed inset-0 m-auto bg-white rounded-3xl shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">{title}</h3>
                        <DialogClose className="rounded-full p-1 hover:bg-gray-200">
                            <X className="h-4 w-4" />
                        </DialogClose>
                    </div>
                    <div className="space-y-2">
                        {description.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
