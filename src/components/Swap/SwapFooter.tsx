'use client';
import Image from "next/image";
import Link from "next/link";

export default function SwapFooter() {
    return (
        <footer className="bg-[#12122666] font-bold text-white w-full text-xs py-5 px-7 relative z-10">
            <div className="container mx-auto px-4">
                <div className="sm:flex justify-between items-center">
                    <div className="flex items-center gap-12">
                        <p>ROCKETX EXCHANGE</p>
                        <div className="border-r-primary h-8 border" />
                        <div className="flex space-x-4">
                            <Image src="/blogger.svg" alt="frame icon" width={14} height={14} />
                            <Image src="/twitter.svg" alt="twitter icon" width={16} height={16} />
                            <Image src="/frame.svg" alt="shield icon" width={16} height={16} />
                        </div>
                    </div>
                    <div className="md:space-x-8">
                        <Link href="#" className="hover:underline">TERMS OF USE</Link>
                        <Link href="#" className="hover:underline mt-3 md:mt-0 block md:inline text-left">PRIVACY POLICY</Link>
                    </div>
                    <div className="md:flex gap-2">
                        <Image src="/volume-icon.png" alt="shield icon" width={16} height={16} />
                        <p className="mt-3 md:mt-0">TOTAL VOLUME: $1.147B</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
