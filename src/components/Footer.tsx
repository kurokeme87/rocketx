'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Function to toggle open/closed tabs
    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };
    return (
        <footer className="md:px-12 text-primary text-[15px] font-normal z-10 pt-24 pb-48 mx-auto  relative mt-40" style={{ boxShadow: "0 -1px 0 rgba(255, 255, 255, .05)" }}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Logo and Language Section */}
                <section>
                    <Link href="#">
                        <Image
                            src="/rocketx-new-logo.png"
                            alt="RocketX Logo"
                            width={150}
                            height={50}
                        />
                    </Link>
                    <p className="mt-2">© 2024 RocketX Exchange</p>
                </section>
                <section className="roadmap-section sm:block md:hidden border-b-[0.2px] border-primary">
                    {/* Tab: Website */}
                    <button
                        className="w-full text-white text-base uppercase text-left py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("website")}
                    >
                        Website
                    </button>
                    {openSection === "website" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3">
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">Home</Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">Referral</Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: App */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("App")}
                    >
                        App
                    </button>
                    {openSection === "App" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3">
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">Swap</Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">Login/Register</Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">My Referral Link</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: External */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("External")}
                    >
                        External
                    </button>
                    {openSection === "External" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3">
                                <li>
                                    <Link href="#" target="_blank" rel="noopener noreferrer">Twitter</Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noopener noreferrer">Telegram</Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: External */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("Legal")}
                    >
                        Legal
                    </button>
                    {openSection === "Legal" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3">
                                <li>
                                    <Link href="#" target="_blank" rel="noopener noreferrer">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: Buy */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("Buy")}
                    >
                        Buy
                    </button>
                    {openSection === "Buy" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3 grid grid-cols-2">
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Bitcoin</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Ethereum</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy BNB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Doge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy XRP</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy OKB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy ADA</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Solana</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy PolkaDOT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy SHIB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Litecoin</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy TRON</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy AVAX</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy UNI</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy ATOM</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy NEAR</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy QNT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy FTM</Link></li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: Convert */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("Convert")}
                    >
                        Convert
                    </button>
                    {openSection === "Convert" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3 grid grid-cols-2">
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to BNB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Solana to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to Solana</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">LTC to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to LTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">DOGE to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to DOGE</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Bitcoin to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to Bitcoin</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BCH to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">TRX to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">AVAX to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">MATIC to USDT</Link></li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: Exchange Pairs */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("Exchange")}
                    >
                        Exchange Pairs
                    </button>
                    {openSection === "Exchange" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3 grid grid-cols-2">
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to BTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">LTC to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to BTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to BNB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB to BTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">LTC to BTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BCH to BTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to USDT</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">DOGE to BTC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to DOGE</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to Polygon</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Polygon to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to BNB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to AVAX</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">AVAX to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to Solana</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Solana to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to Fantom</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Fantom to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to TRX</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">TRX to ETH</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to ATOM</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to XDC</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to FET</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to ARB</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to OP</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to METIS</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to TELOS</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to INJ</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to SEI</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to SUI</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to TIA</Link></li>
                            </ul>
                        </div>
                    )}
                    {/* Tab: Bridge */}
                    <button
                        className="w-full text-white text-base text-left uppercase py-3 px-5 border-t-[0.2px] border-primary"
                        onClick={() => toggleSection("Bridge")}
                    >
                        Bridge
                    </button>
                    {openSection === "Bridge" && (
                        <div className="p-5 border-b-[0.2px] border-primary">
                            <ul className="list-none text-lg space-y-3 grid grid-cols-2">
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">USDC Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BUSD Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Ethereum Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Polygon Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">AVAX Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Bitcoin Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Fantom Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Solana Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Arbitrum Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">CRO Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">Rune Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">METIS Bridge</Link></li>
                                <li><Link href="#" target="_blank" rel="noopener noreferrer">TELOS Bridge</Link></li>
                            </ul>
                        </div>
                    )}
                </section>
                {/* Website Links Section */}
                <section className="hidden md:block">
                    <h2 className="text-[13px] uppercase font-bold text-white  mb-6">Website</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="" target="_blank" rel="noopener noreferrer">Home</Link>
                        </li>
                        <li>
                            <Link href="" target="_blank" rel="noopener noreferrer">Referral</Link>
                        </li>
                        <li>
                            <Link href="" target="_blank" rel="noopener noreferrer">Blog</Link>
                        </li>
                    </ul>
                </section>

                {/* App Links Section */}
                <section className="hidden md:block">
                    <h2 className="text-[13px] uppercase font-bold text-white  mb-6">App</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="" target="_blank" rel="noopener noreferrer">Swap</Link>
                        </li>
                        <li>
                            <Link href="" target="_blank" rel="noopener noreferrer">Login/Register</Link>
                        </li>
                        <li>
                            <Link href="" target="_blank" rel="noopener noreferrer">My Referral Link</Link>
                        </li>
                    </ul>
                </section>

                {/* External Links Section */}
                <section className="hidden md:block">
                    <h2 className="text-[13px] uppercase font-bold text-white  mb-6">External</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" target="_blank" rel="noopener noreferrer">Twitter</Link>
                        </li>
                        <li>
                            <Link href="#" target="_blank" rel="noopener noreferrer">Telegram</Link>
                        </li>
                        <li>
                            <Link href="#" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                        </li>
                    </ul>
                </section>

                {/* Legal Links Section */}
                <section className="hidden md:block">
                    <h2 className="text-[13px] uppercase font-bold text-white  mb-6">Legal</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" target="_blank" rel="noopener noreferrer">Terms of Use</Link>
                        </li>
                        <li>
                            <Link href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="mt-8 grid-cols-1 md:grid-cols-5 gap-6 items-end hidden md:grid">
                <section>
                    <h2 className="text-[13px] uppercase text-white  mb-6 font-bold ">Buy</h2>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Bitcoin</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Ethereum</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy BNB</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Doge</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy XRP</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy OKB</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy ADA</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Solana</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy PolkaDOT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy SHIB</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy Litecoin</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy TRON</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy AVAX</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy UNI</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy ATOM</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy NEAR</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy QNT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Buy FTM</Link></li>
                    </ul>
                </section>
            </div>
            <div className="mt-8 grid-cols-1 md:grid-cols-5 gap-6 items-end hidden md:grid">
                <section>
                    <h2 className="text-[13px] uppercase text-white  mb-6 font-bold ">Convert</h2>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to BNB</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Solana to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to Solana</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">LTC to USDT</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to LTC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">DOGE to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to DOGE</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Bitcoin to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to Bitcoin</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BCH to USDT</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">TRX to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">AVAX to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">MATIC to USDT</Link></li>
                    </ul>
                </section>
            </div>
            <div className="mt-8 grid-cols-1 md:grid-cols-5 gap-6 items-end hidden md:grid">
                <section>
                    <h2 className="text-[13px] uppercase text-white  mb-6 font-bold ">Exchange Pairs</h2>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to BTC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">LTC to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT to BTC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to BNB</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB to BTC</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">LTC to BTC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BCH to BTC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to USDT</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">DOGE to BTC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BTC to DOGE</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to Polygon</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Polygon to ETH</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to BNB</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to AVAX</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">AVAX to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to Solana</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Solana to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to Fantom</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Fantom to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to TRX</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">TRX to ETH</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to ATOM</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to XDC</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to FET</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to ARB</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to OP</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to METIS</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to TELOS</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to INJ</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to SEI</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to SUI</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">ETH to TIA</Link></li>
                    </ul>
                </section>
            </div>
            <div className="mt-8 grid-cols-1 md:grid-cols-5 gap-6 items-end hidden md:grid">
                <section>
                    <h2 className="text-[13px] uppercase text-white  mb-6 font-bold ">Bridge</h2>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDT Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">USDC Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BUSD Bridge</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Ethereum Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">BNB Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Polygon Bridge</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">AVAX Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Bitcoin Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Fantom Bridge</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Solana Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Arbitrum Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">CRO Bridge</Link></li>
                    </ul>
                </section>
                <section>
                    <ul className="space-y-3">
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">Rune Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">METIS Bridge</Link></li>
                        <li><Link href="#" target="_blank" rel="noopener noreferrer">TELOS Bridge</Link></li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}
