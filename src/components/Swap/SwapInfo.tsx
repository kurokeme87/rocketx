'use client';
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Table from "../Table";

export default function SwapInfo() {
    return (
        <BlurFade delay={0.15}>
            <div
                style={{
                    background: 'linear-gradient(180deg, rgba(18, 17, 36, .75) 0%, rgba(17, 17, 36, .5) 100%)'
                }}
                className="rounded"
            >
                <div className="flex items-center justify-center py-5 px-7 font-bold" style={{
                    background: 'rgba(8, 5, 16, .15)'
                }}>
                    <div className="flex items-start relative">
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-[50px] h-10 rounded-full bg-secondary flex items-center justify-center">
                                <Image src="/ethereum-grey.png" width={24} height={24} alt="RVF" />
                            </div>
                            <p className="mt-3 text-xs font-semibold text-white">ETH</p>
                            <p className="mt-2 text-[11px] text-[#7D8CA3]">ETHEREUM NETWORK</p>
                        </div>
                        <div className="absolute top-2 left-[45%] border-dashed border rounded-full border-[#7d8ca3] p-1 flex flex-col justify-center items-center">
                            <Image src="/1inch-token.webp" alt="ETH" width={24} height={24} className="rounded-full" />
                        </div>
                        <svg width="100" height="20" className="mt-3">
                            <line x1="0" y1="10" x2="20" y2="10" stroke="#7D8CA3" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="80" y1="10" x2="100" y2="10" stroke="#7D8CA3" strokeWidth="1" strokeDasharray="3,3" />
                        </svg>
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-[50px] h-10 rounded-full bg-secondary flex items-center justify-center">
                                <Image src="/avatar.webp" alt="ETH" width={24} height={24} className="w-6 h-6 rounded-full" />
                            </div>
                            <p className="mt-3 text-xs font-semibold text-white">RVF(V2)</p>
                            <p className="mt-2 text-[11px] text-[#7D8CA3]">ETHEREUM NETWORK</p>
                        </div>
                    </div>
                </div>
               <div className="min-h-[70vh]">
                    <Table />
               </div>
            </div>
        </BlurFade >
    );
}
