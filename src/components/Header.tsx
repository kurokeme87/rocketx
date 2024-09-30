'use client'
import { AlignJustify, ChevronDown, PlusIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button } from './ui/button';
import useToggle from '@/utils/hooks';

export default function Header() {

    const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useToggle();

    const [openSection, setOpenSection] = useState<string | null>(null); // Tracks the open section
    // Function to toggle the section
    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <header className="py-6 relative text-white font-bold text-xs z-50 px-2 md:px-10 container mx-auto flex flex-wrap justify-between items-center">
            {/* Logo */}
            <Link href="./swap" className="block">
                <Image
                    src="/rocketx-new-logo.png"
                    alt="RocketX Logo"
                    loading="lazy"
                    width={140}
                    height={140}
                />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:block">
                <ul className="flex justify-center space-x-[5.5rem] uppercase font-normal">
                    <li>
                        <Link href="./about" className="hover:text-gray-300 tracking-[0.2em]">
                            About
                        </Link>
                    </li>
                    <li className="relative group hidden xl:block">
                        <button className="hover:text-gray-300 tracking-[0.2em] flex items-start gap-1">ROCKETX <ChevronDown className='-mt-1' /></button>
                        <ul className="absolute hidden group-hover:block font-bold uppercase shadow-lg py-2 isolate z-[10000] w-52 bg-[#10101d99] top-1/2 mt-9 leading-normal list-none p-2 rounded-md tracking-wide text-xs text-[#7D8CA3] backdrop-blur-lg">

                            <li>
                                <Link href="#features" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#rvf-utility" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    RVF Utility
                                </Link>
                            </li>
                            <li>
                                <Link href="#audit" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Audit
                                </Link>
                            </li>
                            <li>
                                <Link href="#roadmap" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Roadmap
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li >
                        <Link href="./referral" className="hover:text-gray-300 tracking-[0.2em]">
                            REFERRAL
                        </Link>
                    </li>
                    {/* More Dropdown */}
                    <li className="relative group">
                        <button className="hover:text-gray-300 tracking-[0.2em] flex items-start gap-1">MORE <ChevronDown className='-mt-1' /></button>
                        <ul className="absolute hidden group-hover:block bg-[#10101d99] font-bold uppercase shadow-lg py-2 isolate z-[10000] w-52 top-1/2 mt-9 leading-normal list-none p-2 rounded-md tracking-wide text-xs backdrop-blur-lg">

                            <li>
                                <Link href="#blog" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#vision-paper" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    VISION PAPER
                                </Link>
                            </li>
                            <li>
                                <Link href="#api" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    API
                                </Link>
                            </li>
                            <li>
                                <Link href="#features" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#rvf-utility" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    RVF Utility
                                </Link>
                            </li>
                            <li>
                                <Link href="#audit" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Audit
                                </Link>
                            </li>
                            <li>
                                <Link href="#roadmap" className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100">
                                    Roadmap
                                </Link>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>

            {/* Right Side (Desktop) */}
            <div className="hidden lg:flex space-x-4 items-center">
                <p className="rounded-sm font-bold text-[11px] whitespace-nowrap py-2 px-6 bg-secondary">$0.088 BUY RVF</p>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex w-1/2 justify-end">
                <Button className='p-2' onClick={toggleMobileMenu}>
                    <AlignJustify />
                </Button>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed text-[13px] top-0 right-0 h-full w-full pt-10 bg-black text-white z-20 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <div className="flex justify-end pr-4">
                    {/* Close button */}
                    <button onClick={toggleMobileMenu} className='bg-primary h-10 px-3.5 rounded-sm flex flex-col mt-7 items-center justify-center'>
                        <XIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4 uppercase">
                    {/* Home Dropdown */}
                    <li>
                        <button onClick={() => toggleSection('home')} className="flex uppercase font-bold justify-between items-center px-4 py-2 w-full">
                            Home
                            <PlusIcon className={`transition-transform ${openSection === 'home' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {openSection === 'home' && (
                            <ul className="pl-4 space-y-2 text-[#7D8CA3]">
                                <li>
                                    <Link href="#features" className="block px-4 py-2">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#audit" className="block px-4 py-2">
                                        Audit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#roadmap" className="block px-4 py-2">
                                        Roadmap
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#rvf-utility" className="block px-4 py-2">
                                        RVF Utility
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* About Dropdown */}
                    <li>
                        <button onClick={() => toggleSection('about')} className="flex uppercase font-bold justify-between items-center px-4 py-2 w-full">
                            About
                            <PlusIcon className={`transition-transform ${openSection === 'about' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {openSection === 'about' && (
                            <ul className="pl-4 space-y-2 text-[#7D8CA3]">
                                <li>
                                    <Link href="#ecosystem" className="block px-4 py-2">
                                        Ecosystem
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#timeline" className="block px-4 py-2">
                                        Timeline
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#partners" className="block px-4 py-2">
                                        Partners
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Other Menu Items */}
                    <li>
                        <Link href="#blog" className="block px-4 py-2 font-bold uppercase">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#faq" className="block px-4 py-2 font-bold uppercase">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link href="#vision-paper" className="block px-4 py-2 font-bold uppercase">
                            VISION PAPER
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
