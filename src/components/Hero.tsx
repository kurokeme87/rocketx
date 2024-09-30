import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import Header from "./Header";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="w-full min-h-screen font-bold flex flex-col items-center justify-center p-4 bg-[#010106] bg-[url('/bg.webp')] bg-fixed bg-cover bg-center bg-no-repeat overflow-x-hidden">
            <Header />
            <div className="w-full lg:w-[62%] lg:mb-0 text-white pt-20 text-center">
                <BlurFade>
                    <p className="text-2xl font-normal">Cheaper, Faster and more Secure.</p>
                    <h1 className="text-5xl font-bold leading-tight my-8">
                        Seamlessly Uniting Blockchains
                    </h1>
                </BlurFade>

                <BlurFade>
                    <p className="text-2xl font-normal leading-10 text-primary mb-8">
                        RocketX is the 1-stop-shop to get the best rates for both on-chain & cross-chain swaps across all leading exchanges via a single intuitive UI.
                    </p>
                </BlurFade>

                <BlurFade>
                    <div className="flex justify-center items-center flex-wrap gap-8 mb-12">
                        <Link href="/swap">
                        <Button variant="primary" className="rounded-[100px] uppercase gap-2">
                            <span>Launch App</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="18" height="18" viewBox="0 0 512 512" style={{ transform: 'rotate(90deg)' }} preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M1710 3200 l0 -1490 -425 -2 -425 -3 635 -635 635 -635 0 2128 0 2127 -210 0 -210 0 0 -1490z" fill="#FFF"></path>
                                    <path d="M2990 2562 l0 -2132 210 0 210 0 0 1490 0 1490 425 0 c234 0 425 3 425 8 0 4 -286 293 -635 642 l-635 635 0 -2133z" fill="#FFF"></path>
                                </g>
                            </svg>
                        </Button>
                        </Link>
                        <Button variant="primary" className="bg-[#ffffff17] px-7 rounded-[100px] uppercase">
                            Rocketx API
                        </Button>
                    </div>
                </BlurFade>
            </div>
            <div className="relative mt-28 w-full">
                <div className="dapp-desktop"></div>
                <div className="dapp-shape-1"></div>
                <div className="dapp-shape-2"></div>
                <div className="dapp-shape-3"></div>
            </div>
        </div>
    );
}
