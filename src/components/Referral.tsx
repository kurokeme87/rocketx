import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Referral() {
    return (
        <section className="bg-accent-foreground relative">
            <div className="px-12 z-[10] w-full pt-40 relative overflow-hidden">
                <ul className="absolute top-0 w-full h-full z-[5] list-none">
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                </ul>
                <div className="relative md:pt-72 pb-36">
                    <div className="rewards-right w-1/2 h-full absolute top-0 right-0">
                        <div className="banner-rewards-1"></div>
                        <div className="shape-rewards"></div>
                    </div>
                    <div className="relative w-full font-black text-white text-[64px] mt-20 md:mt-0 md:text-[100px] text-center md:text-left tracking-tighter">
                        <h2 className="backup-headline referral-headline leading-[120px] text-black w-full absolute left-0 top-[-30px] ms500">Referral</h2>
                        <h2 className="z-[2] relative pt-10 text-[#1f2e45] ms500">&amp; Rewards</h2>
                    </div>
                    <p className="text-primary leading-8 tracking-wide z-10 relative px-4 mt-4 md:mt-0 md:px-0 text-center md:text-left md:w-[65%] pb-8 text-xl">
                        Are you tired of simply holding your crypto assets with no added benefits? The wait is over!
                        <br />
                        <br />
                        If you refer RocketX to your friends and family, you will start earning 50% commission in USDT on a monthly basis.
                    </p>
                    <Button className="uppercase text-white text-[11px] bg-muted font-bold py-2 px-[14px] h-auto z-10" aria-label="about referral">Referral</Button>
                    <Button aria-label="get my referral link" className="underline bg-white font-bold uppercase text-muted-foreground ml-1 z-10 text-[11px] py-2 px-[14px] h-auto">Get my ref link</Button>
                    <ul className="pt-20 z-10 relative list-none font-bold flex gap-20 md:gap-2 flex-col md:flex-row">
                        <li className="md:w-1/4 flex flex-col md:flex-row items-center gap-6">
                            <Image width={44} height={44} src="/ref-icon.png" className="rewards-stats-icon" alt="referral" />
                            <div>
                                <h4 className="text-2xl tracking-tight text-muted">Refer &amp; Earn</h4>
                                <h6 className="pt-2.5 tracking-tight text-[13px] text-black uppercase">Up to 50% Comission</h6>
                            </div>
                        </li>
                        <li className="md:w-1/4 flex flex-col md:flex-row items-center gap-6">
                            <Image width={44} height={44} src="/sign-up-icon.png" className="rewards-stats-icon" alt="sign-up" />
                            <div>
                                <h4 className="text-2xl tracking-tight text-muted">Get 100% Discount</h4>
                                <h6 className="pt-2.5 tracking-tight text-center md:text-left text-[13px] text-black uppercase">
                                    HODL RVF
                                </h6>
                            </div>
                        </li>
                    </ul>
                    <div className="text-xl z-10 text-primary relative mt-10 text-center md:text-left">
                        Check out the {" "}
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="underline">benefits</Link> of holding RVF.
                    </div>
                </div>
                <div className="w-4/5 xl:w-full h-96 mt-40 mx-auto z-20 relative">
                    <div className="reward-distribution">
                        <ul className="overflow-hidden flex justify-between relative list-none rounded-xl font-bold h-full w-full">
                            <li className="w-2/4 py-12 uppercase text-center font-bold">
                                <div className="reward-icon"></div>
                                <h3 className="text-2xl pt-5">$7,800</h3>
                                <h6 className="text-xs text-primary tracking-wider pt-2.5">ready for distribution</h6>
                            </li>
                            <li className="w-2/4 py-12 uppercase text-center font-bold">
                                <div className="reward-icon"></div>
                                <h3 className="text-2xl pt-5">$82,100</h3>
                                <h6 className="text-xs text-primary tracking-wider pt-2.5">all time earnings</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute z-[12] w-[350px] h-44 -right-20 bottom-5">
                        <div className="reward-pending-inner font-bold">
                            <div className="piggy"></div>
                            <h3 className="text-3xl tracking-tighter text-muted-foreground">$920</h3>
                            <h6 className="text-primary text-xs tracking-tighter pt-2.5">pending this month</h6>
                        </div>
                    </div>
                    <div className="rewards-dapp-inner"></div>
                </div>
            </div>
            <div className="w-full h-full absolute overflow-hidden top-0 left-0">
                <div className="w-full h-full absolute left-0 top-0 bg-[rgba(255,255,255,.4)] z-[2] backdrop-blur-[130px]"></div>
                <div className="rewards-blur-contents"></div>
            </div>
        </section>
    )
}