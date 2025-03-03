import Link from "next/link";

export function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-5 gap-8 py-6 mt-48 mx-auto px-8 md:px-16 bg-white">
            <div className="flex flex-col md:col-span-2 gap-4 items-start">
                <Link href="#" className="text-2xl font-bold text-indigo-600">Shop</Link>
                <p className="max-w-80">Shop is the next step on our mission to make commerce better for everyone.</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
                <p className="font-semibold">Information</p>
                <Link href="#" className="text-gray-500 hover:text-black">Help Center</Link>
                <Link href="#" className="text-gray-500 hover:text-black">FAQ</Link>
            </div>
            <div className="flex flex-col gap-4 items-start">
                <p className="font-semibold">Social</p>
                <Link href="#" className="text-gray-500 hover:text-black">Facebook</Link>
                <Link href="#" className="text-gray-500 hover:text-black">Twitter</Link>
                <Link href="#" className="text-gray-500 hover:text-black">Instagram</Link>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-semibold">Legal</p>
                <Link href="#" className="text-gray-500 hover:text-black">Privacy Policy</Link>
                <Link href="#" className="text-gray-500 hover:text-black">Terms of Service</Link>
                <Link href="#" className="text-gray-500 hover:text-black">Contact Us</Link>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2025 Shop. All rights reserved.</p>
        </footer>
    );
}
