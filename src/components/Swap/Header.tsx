"use client";
import { AlignJustify, ChevronDown, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import useToggle from "@/utils/hooks";
import RocketxConnectButton from "../global/RocketxConnectButton";
import { useAccount } from "wagmi";
import { shortenAddressSmall } from "../../app/utils";
import { chainImages } from "../../app/lib/network-images";

export default function Header() {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useToggle();
  const { address, chain, connector } = useAccount();
  //   console.log(connector, "chain");

  return (
    <header className="py-10 relative text-primary font-bold text-xs z-10 px-4 container mx-auto flex flex-wrap justify-between items-center">
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
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="./swap" className="text-white hover:text-white">
              SWAP
            </Link>
          </li>
          <li className="hidden xl:block">
            <Link href="./referral" className="hover:text-white">
              REFERRAL
            </Link>
          </li>
          <li>
            <Link href="./analytics" className="hover:text-white">
              ANALYTICS
            </Link>
          </li>
          <li>
            <Link href="./help" className="hover:text-white">
              HELP
            </Link>
          </li>
          <li>
            <Link href="./staking" className="hover:text-white">
              STAKING
            </Link>
          </li>

          {/* More Dropdown */}
          <li className="relative group">
            <button className="hover:text-white flex items-start gap-1">
              MORE <ChevronDown className="-mt-1" />
            </button>
            <ul className="absolute hidden group-hover:block font-bold uppercase shadow-lg py-2 isolate z-[10000] w-52 bg-[#10101d99] top-1/2 mt-9 leading-normal list-none p-2 rounded-md tracking-wide text-xs text-[#7D8CA3] backdrop-blur-lg">
              <li>
                <Link
                  href="#faq"
                  className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100"
                >
                  REFERRAL
                </Link>
                <Link
                  href="#faq"
                  className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100"
                >
                  MIGRATE RVF
                </Link>
                <Link
                  href="#faq"
                  className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100"
                >
                  TAX REPORTING
                </Link>
                <Link
                  href="#faq"
                  className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100"
                >
                  FIAT ON-RAMP
                </Link>
                <Link
                  href="#faq"
                  className="block px-4 py-2 text-[#7D8CA3] hover:bg-gray-100"
                >
                  LOGIN
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Right Side (Desktop) */}

      <RocketxConnectButton
        component={
          <div className="flex justify-between items-center whitespace-nowrap py-2 px-4 bg-secondary">
            <Image
              src={chainImages[chain?.id]}
              alt={chain?.name || "provider image"}
              width={14}
              height={14}
            />
            <div className="text-primary rounded-sm">
              {shortenAddressSmall(address)}
            </div>
          </div>
        }
        connect={
          <div className="flex space-x-4 items-center">
            <div className="text-primary rounded-sm whitespace-nowrap py-2 px-4 bg-secondary">
              $0.088 BUY RVF
            </div>
            <div className="flex text-white items-center rounded-sm space-x-2 whitespace-nowrap py-2 px-4 bg-secondary">
              <Image
                src="/wallet.png"
                width={16}
                height={16}
                alt="Wallet"
                className="h-4"
              />
              <span>CONNECT WALLET</span>
            </div>
            <div className="flex text-white items-center rounded-sm space-x-2 whitespace-nowrap py-2 px-4 bg-secondary">
              <Image
                src="/historyIcon.png"
                width={16}
                height={16}
                alt="History"
                className="h-4"
              />
              <span>HISTORY</span>
            </div>
          </div>
        }
        isNavbar={true}
      />

      {/* Mobile Menu Button */}

      <div className="lg:hidden flex justify-end gap-2">
        <Button className="text-white font-semibold">
          <Image
            src="/wallet.png"
            alt="wallet"
            width={15}
            height={15}
            className="mr-1"
          />
          CONNECT
        </Button>
        <Button className="p-2" onClick={toggleMobileMenu}>
          <AlignJustify />
        </Button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed text-[13px] isolate  top-0 right-0 h-full w-full pt-10 bg-black text-white z-40 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end pr-4">
          {/* Close button */}
          <button
            onClick={toggleMobileMenu}
            className="bg-primary h-10 px-3.5 rounded-sm flex flex-col mt-7 items-center justify-center"
          >
            <XIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 uppercase">
          {/* Other Menu Items */}
          <li>
            <Link href="./swap" className="block px-4 py-2 font-bold uppercase">
              SWAP
            </Link>
          </li>
          <li>
            <Link
              href="./history"
              className="block px-4 py-2 font-bold uppercase"
            >
              History
            </Link>
          </li>
          <li className="hidden xl:block">
            <Link
              href="./referral"
              className="block px-4 py-2 font-bold uppercase"
            >
              REFERRAL
            </Link>
          </li>
          <li>
            <Link
              href="./analytics"
              className="block px-4 py-2 font-bold uppercase"
            >
              ANALYTICS
            </Link>
          </li>
          <Link
            href="./staking"
            className="block px-4 py-2 font-bold uppercase"
          >
            STAKING
          </Link>
          <li>
            <Link href="./help" className="block px-4 py-2 font-bold uppercase">
              HELP
            </Link>
          </li>
          <li>
            <Link href="#faq" className="block px-4 py-2 font-bold uppercase">
              FAQ
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    </header>
  );
}
