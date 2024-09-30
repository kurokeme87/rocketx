import Image from "next/image";
import Link from "next/link";

export default function Crosschain() {
    return (
        <div className="bg-white relative">
            <div className="overflow-hidden relative pb-20 md:py-[300px] w-full">
                <ul className="absolute top-0 w-full h-full z-[5] list-none skew-x-[59deg] skew-y-[59deg]">
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                </ul>
                <div className="shape-crosschain"></div>
                <div className="relative w-full lg:mb-0 text-black text-center">
                    <div className="z-10 relative m-auto w-full lg:w-3/5">
                        <h2 className="backup-headline crosschain-headline font-black ms500 text-white text-7xl md:text-[100px] text-center tracking-[-0.05em] leading-[120px] w-full absolute left-0 -top-16 md:top-[-35px]">Swap</h2>
                        <h2 className="ms500 text-[54px] md:text-[100px] text-[#2f1c66] relative z-[2] mt-10 tracking-tighter font-black">Crosschain</h2>
                        <p className="text-primary z-10 relative px-5 lg:px-0 pt-8 tracking-wide leading-8 text-lg md:text-xl text-center">Swap your assets seamlessly across multiple blockchain networks with RocketX cross-chain swap feature. Whether you want to swap BTC to ETH, ETH to BNB or ETH to AVAX, our platform allows you to exchange one cryptocurrency for another, on all leading blockchains, without any hassle. Enjoy fast and secure trades with our cutting-edge cross-chain swap technology.</p>
                    </div>
                    <div className="font-bold list-none relative grid md:grid-cols-4 gap-20 md:gap-0 z-10 p-16 uppercase crosschain-stats">
                        <div className="flex flex-col gap-5 items-center">
                            <Image width={44} height={44} src="/networks-icon.png" alt="blockchains" className="crosschain-stats-icon" />
                            <div>
                                <h4>654,145</h4>
                                <h6 className="text-[13px]">swaps</h6>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <Image width={44} height={44} src="/volume-icon-1.png" alt="volume" className="crosschain-stats-icon" />
                            <div>
                                <h4>$1.147B</h4>
                                <h6 className="text-[13px]">Total volume</h6>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <Image width={44} height={44} src="/swap-icon.png" alt="swaps" className="crosschain-stats-icon swap-icon" />
                            <div>
                                <h4>161</h4>
                                <h6 className="text-[13px]">networks</h6>
                            </div>
                        </div>
                        <div>
                            <Link href="/swap" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap mx-auto md:mx-0 bg-accent rounded-sm cursor-pointer block py-2 w-fit text-white text-[11px] uppercase px-7 mb-10">Try it out</Link>
                            <div className="grid grid-cols-7 md:grid-cols-4  gap-5 px-5 md:max-w-52 mx-auto md:mx-0">
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/bnb-chain.png" alt="bnb-chain" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/eth.png" alt="eth" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/btc.png" alt="btc" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/polygon.png" alt="polygon" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/avalanche.png" alt="avalanche" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/optimism.png" alt="optimism" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/fantom.png" alt="fantom" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/solana.png" alt="solana" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/arbitrum.png" alt="arbitrum" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/kcc.png" alt="kcc" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/telos.png" alt="telos" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/klaytn.png" alt="klaytn" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/aurora.png" alt="aurora" /></div>
                                <div className="opacity-35 hover:opacity-100"><Image width={18} height={18} src="/moonbeam.png" alt="moonbeam" /></div>
                                <div className="opacity-35 hover:opacity-100 text-2xl text-start"><span>+</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="crosschain-blur-wrapper">
                    <div className="crosschain-blur-overlay"></div>
                    <div className="crosschain-blur-contents"></div>
                </div>
            </div>
        </div>
    );
}
