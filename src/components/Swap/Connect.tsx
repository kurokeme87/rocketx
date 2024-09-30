"use client";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { Switch } from "../ui/switch";
import Image from "next/image";
import {
  useGetCoins,
  useGetExchangeRate,
  useGetCoinByID,
  Coin,
} from "@/api/coins";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDown, FileEditIcon, Star, XIcon } from "lucide-react";
import { coinNetwork } from "@/data/coins";
import RocketxConnectButton from "../../components/global/RocketxConnectButton";
import ConfirmSwapModal from "../../components/modal/ConfirmSwap";
import { useAccount } from "wagmi";
import Web3 from "web3";

export default function Connect() {
  const [walletBalance, setWalletBalance] = useState<string>("0");
  const [selectedFrom, setSelectedFrom] = useState<Coin | null>(null);
  const [selectedTo, setSelectedTo] = useState<Coin | null>(null);
  const [fromAmount, setFromAmount] = useState<string>("0.0");
  const [toAmount, setToAmount] = useState<string>("0.0");
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [searchNetwork, setSearchNetwork] = useState<string>("");
  const [searchToken, setSearchToken] = useState<string>("");
  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [coinData, setCoinData] = useState<Coin[]>([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const { address, isConnected } = useAccount();
  const [isAddressShow, setIsAddressShow] = useState<boolean>(false);

  // Set default selections once coins are loaded
  const { data: coins = [], isLoading: loadingCoins } = useGetCoins();
  // Fetch coin details only after a coin is selected
  const { data: fromCoinDetail, isLoading: loadingFromCoin } = useGetCoinByID(
    selectedFrom?.id ?? ""
  );
  const { data: toCoinDetail, isLoading: loadingToCoin } = useGetCoinByID(
    selectedTo?.id ?? ""
  );
  const { data: exchangeRateData } = useGetExchangeRate(
    selectedFrom?.id ?? "",
    selectedTo?.id ?? ""
  );

  useEffect(() => {
    if (coins.length > 0) {
      setCoinData(coins);
      setSelectedFrom(coins[0]);
      setSelectedTo(coins[1]);
    }
  }, [coins]);

  useEffect(() => {
    if (exchangeRateData && selectedFrom && selectedTo) {
      const fromPrice = exchangeRateData[selectedFrom.id]?.usd;
      const toPrice = exchangeRateData[selectedTo.id]?.usd;
      if (fromPrice && toPrice) {
        setExchangeRate(toPrice / fromPrice);
      }
    }
  }, [exchangeRateData, selectedFrom, selectedTo]);

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    setToAmount((parseFloat(value) * exchangeRate).toFixed(2));
  };

  const handleCoinChange = (type: "from" | "to", coin: Coin) => {
    if (type === "from") {
      setSelectedFrom(coin);
    } else {
      setSelectedTo(coin);
    }
  };

  const handleMax = () => {
    if (isConnected && fromAmount && walletBalance) {
      setFromAmount(walletBalance);
    }
  };

  const filteredNetworks = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchNetwork.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchNetwork.toLowerCase())
  );

  const filteredTokens = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchToken.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchToken.toLowerCase())
  );

  const handleClick = async (symbol: string) => {
    setSelectedChain(symbol);

    try {
      const chainTokens = coinNetwork[symbol.toUpperCase()] || [];

      const matchedCoins = coins.filter((coin) =>
        chainTokens.includes(coin.symbol.toUpperCase())
      );

      setCoinData(matchedCoins);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  const getBalance = async () => {
    try {
      // Check if window.ethereum is available
      if (typeof window.ethereum === "undefined") {
        console.log("Ethereum provider is not available");
        return;
      }

      // Initialize Web3 instance
      const web3 = new Web3(window.ethereum);

      // Request accounts
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        console.log(
          "No accounts found. Make sure the user is logged into their wallet."
        );
        return;
      }

      // Get balance in wei
      const weiBalance = await web3.eth.getBalance(accounts[0]);

      if (weiBalance === undefined) {
        console.error("Failed to fetch balance for the account:", accounts[0]);
        return;
      }

      // Convert to Ether
      const ethBalance = web3.utils.fromWei(weiBalance, "ether"); // Specify 'ether' as the unit
      // console.log("ETH Balance:", ethBalance);

      // Set the wallet balance state
      setWalletBalance(ethBalance);
    } catch (err) {
      console.log("Error fetching balance:", err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <>
      <BlurFade>
        <div className="flex relative justify-center overflow-y-auto">
          <section className="connect-card text-xs max-w-[480px] md:max-w-none">
            <div className="flex items-center justify-between pb-5">
              <p className="uppercase py-[7px] px-2.5 ml-2">SWAP</p>
              <Button size="icon">
                <Image
                  src="/setting.png"
                  alt="setting icon"
                  width="16"
                  height="16"
                />
              </Button>
            </div>
            <div className="flex gap-5">
              <div className="font-bold text-[10px] cursor-pointer text-center w-14 flex gap-1.5 justify-center flex-col items-center">
                <div className="flex gap-1.5 flex-col items-center">
                  <Image
                    src={fromCoinDetail?.image || "/ethereum-grey.png"}
                    alt={fromCoinDetail?.name || "Coin Network"}
                    width={24}
                    height={24}
                  />
                  <span className="uppercase">
                    {fromCoinDetail?.name || "Ethereum Network"}
                  </span>
                </div>
                <div className="my-2.5">
                  <Image src="/path.png" alt="divider" width={1} height={8} />
                </div>
                <div className="flex gap-1.5 flex-col items-center">
                  <Image
                    src={toCoinDetail?.image || "/ethereum-grey.png"}
                    alt={toCoinDetail?.name || "Coin Network"}
                    width={24}
                    height={24}
                  />
                  <span className="uppercase">
                    {toCoinDetail?.name || "Ethereum Network"}
                  </span>
                </div>
              </div>
              <div className="font-bold text-[10px] relative cursor-pointer text-center w-full flex gap-2.5 flex-col">
                <div className="bg-secondary py-2.5 px-3.5 h-20 rounded flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-secondary-foreground p-2 flex flex-col justify-center items-center">
                      <Image
                        src={fromCoinDetail?.image || "/ethereum-grey.png"}
                        alt={fromCoinDetail?.name || "Coin Network"}
                        width={24}
                        height={24}
                        className="min-w-[20px] min-h-[20px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        value={fromAmount}
                        onChange={handleFromAmountChange}
                        placeholder="0.0"
                        className="token-amount-input w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span className="text-[#7D8CA3] text-start mt-4 text-[11px]">
                        {isNaN(parseFloat(fromAmount) * exchangeRate)
                          ? ""
                          : `~$ ${(
                              parseFloat(fromAmount) * exchangeRate
                            ).toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2">
                    <Drawer direction="top">
                      <DrawerTrigger className="rounded bg-secondary outline-none text-[13px] border-none focus:none flex justify-between gap-2 items-center">
                        <span className="uppercase">
                          {selectedFrom?.symbol ?? ""}
                        </span>
                        <ChevronDown size={16} />
                      </DrawerTrigger>
                      <DrawerContent className="max-h-full overflow-hidden max-w-[600px] m-auto grid grid-cols-3 lg:grid-cols-5 border-none">
                        <div className="h-full bg-[#0D0D20] lg:col-span-2">
                          <DrawerHeader>
                            <input
                              type="text"
                              placeholder="NETWORK"
                              value={searchNetwork}
                              onChange={(e) => setSearchNetwork(e.target.value)} // Update search term on input
                              className="w-full px-4 py-2 mt-2 border-none outline-none text-[11px] bg-secondary rounded"
                            />
                          </DrawerHeader>
                          <div className="grid lg:grid-cols-2 gap-2 items-start p-2 overflow-y-auto custom-scrollbar h-svh">
                            {filteredNetworks.map((coin) => (
                              <Button
                                onClick={() => handleClick(coin.symbol)}
                                key={coin.id}
                                className="flex-col justify-center items-center gap-2 py-3 h-auto border border-[#2f3857] bg-transparent focus-within:bg-secondary hover:bg-inherit focus:hover:bg-secondary"
                              >
                                <Image
                                  src={coin.image || "/ethereum-grey.png"}
                                  alt={coin.name}
                                  width={32}
                                  height={32}
                                />
                                <span>{coin.symbol.toUpperCase()}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 lg:col-span-3 bg-[#141429]">
                          <div className="pt-5 px-2">
                            <h4 className="uppercase font-bold text-base">
                              Swapping from
                            </h4>
                            <input
                              type="text"
                              placeholder="TOKEN OR ADDRESS"
                              value={searchToken}
                              onChange={(e) => setSearchToken(e.target.value)}
                              className="w-full px-4 py-2 mt-2 border-none outline-none text-[11px] bg-secondary rounded"
                            />
                          </div>
                          <div className="flex flex-col p-2 overflow-y-auto custom-scrollbar h-svh">
                            <div className="grid grid-cols-4 gap-2 mb-2">
                              {selectedChain &&
                                coinData.length > 0 &&
                                coinData.map((coin) => (
                                  <DrawerClose key={coin.id}>
                                    <Button
                                      key={coin.id}
                                      className="flex justify-center items-center gap-1.5 py-1 px-3 rounded-sm h-auto w-full bg-secondary text-white hover:bg-secondary"
                                      onClick={() =>
                                        handleCoinChange("from", coin)
                                      }
                                    >
                                      <Image
                                        src={coin.image || "/ethereum-grey.png"}
                                        alt={coin.name}
                                        width={20}
                                        height={20}
                                      />
                                      <span>{coin.symbol.toUpperCase()}</span>
                                    </Button>
                                  </DrawerClose>
                                ))}
                            </div>
                            {filteredTokens.map((coin) => (
                              <DrawerClose key={coin.id}>
                                <Button
                                  onClick={() => handleCoinChange("from", coin)}
                                  className="justify-between w-full mt-2 items-center gap-2 py-3 h-auto border border-[#2f3857] bg-transparent focus-within:bg-secondary hover:bg-inherit focus:hover:bg-secondary"
                                >
                                  <span className="flex flex-col justify-start items-start">
                                    <span className="text-[13px]">
                                      {coin.symbol.toUpperCase()}
                                    </span>
                                    <span className="text-[11px] text-primary">
                                      {coin.name}
                                    </span>
                                  </span>
                                  <span className="flex gap-3 items-center">
                                    <Star size={16} className="text-primary" />
                                    <Image
                                      src={coin.image || "/ethereum-grey.png"}
                                      alt={coin.name}
                                      width={24}
                                      height={24}
                                    />
                                  </span>
                                </Button>
                              </DrawerClose>
                            ))}
                          </div>
                        </div>
                        <DrawerClose className="absolute top-6 right-6">
                          <XIcon size={12} />
                        </DrawerClose>
                      </DrawerContent>
                    </Drawer>

                    {isConnected ? (
                      <div className="flex justify-start items-center gap-3">
                        <p className="font-semibold text-white text-xs">
                          {walletBalance}
                        </p>
                        <button
                          onClick={handleMax}
                          className="text-[10px] bg-[#7D8CA3] px-1.5 py-0.5 rounded-sm text-gray-800"
                        >
                          MAX
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="absolute top-[40%] left-[43%] rounded-full bg-secondary-foreground w-9 h-9 flex flex-col justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width="18"
                    height="18"
                    viewBox="0 0 512 512"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        fill="#fff9"
                        d="M1710 3200 l0 -1490 -425 -2 -425 -3 635 -635 635 -635 0 2128 0 2127 -210 0 -210 0 0 -1490z"
                      ></path>
                      <path
                        fill="#fff9"
                        d="M2990 2562 l0 -2132 210 0 210 0 0 1490 0 1490 425 0 c234 0 425 3 425 8 0 4 -286 293 -635 642 l-635 635 0 -2133z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="bg-secondary py-2.5 px-3.5 h-20 rounded flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-secondary-foreground p-2 flex flex-col justify-center items-center">
                      <Image
                        src={toCoinDetail?.image || "/ethereum-grey.png"}
                        alt={toCoinDetail?.name || "Coin Network"}
                        width={24}
                        height={24}
                        className="min-w-[20px] min-h-[20px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        value={toAmount}
                        onChange={handleFromAmountChange}
                        placeholder="0.0"
                        disabled
                        className="token-amount-input w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span className="text-[#7D8CA3] text-start mt-4 text-[11px]">
                        {isNaN(parseFloat(toAmount) * exchangeRate)
                          ? ""
                          : `~$ ${(parseFloat(toAmount) * exchangeRate).toFixed(
                              2
                            )}`}
                      </span>
                    </div>
                  </div>
                  <Drawer direction="top">
                    <DrawerTrigger className="rounded bg-secondary outline-none text-[13px] border-none focus:none flex justify-between gap-2 items-center">
                      <span className="uppercase">
                        {selectedTo?.symbol ?? ""}
                      </span>
                      <ChevronDown size={16} />
                    </DrawerTrigger>
                    <DrawerContent className="max-h-full overflow-hidden max-w-[600px] m-auto grid grid-cols-3 lg:grid-cols-5 border-none">
                      <div className="h-full bg-[#0D0D20] lg:col-span-2">
                        <DrawerHeader>
                          <input
                            type="text"
                            placeholder="NETWORK"
                            value={searchNetwork}
                            onChange={(e) => setSearchNetwork(e.target.value)} // Update search term on input
                            className="w-full px-4 py-2 mt-2 border-none outline-none text-[11px] bg-secondary rounded"
                          />
                        </DrawerHeader>
                        <div className="grid lg:grid-cols-2 gap-2 items-start p-2 overflow-y-auto custom-scrollbar h-svh">
                          {filteredNetworks.map((coin) => (
                            <Button
                              onClick={() => handleClick(coin.symbol)}
                              key={coin.id}
                              className="flex-col justify-center items-center gap-2 py-3 h-auto border border-[#2f3857] bg-transparent focus-within:bg-secondary hover:bg-inherit focus:hover:bg-secondary"
                            >
                              <Image
                                src={coin.image || "/ethereum-grey.png"}
                                alt={coin.name}
                                width={32}
                                height={32}
                              />
                              <span>{coin.symbol.toUpperCase()}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-3 bg-[#141429]">
                        <div className="pt-5 px-2">
                          <h4 className="uppercase font-bold text-base">
                            Swapping to
                          </h4>
                          <input
                            type="text"
                            placeholder="TOKEN OR ADDRESS"
                            value={searchToken}
                            onChange={(e) => setSearchToken(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border-none outline-none text-[11px] bg-secondary rounded"
                          />
                        </div>
                        <div className="flex flex-col p-2 overflow-y-auto custom-scrollbar h-svh">
                          <div className="grid grid-cols-4 gap-2 mb-2">
                            {selectedChain &&
                              coinData.length > 0 &&
                              coinData.map((coin) => (
                                <DrawerClose key={coin.id}>
                                  <Button
                                    key={coin.id}
                                    className="flex justify-center items-center gap-1.5 py-1 px-3 rounded-sm h-auto w-full bg-secondary text-white hover:bg-secondary"
                                    onClick={() => handleCoinChange("to", coin)}
                                  >
                                    <Image
                                      src={coin.image || "/ethereum-grey.png"}
                                      alt={coin.name}
                                      width={20}
                                      height={20}
                                    />
                                    <span>{coin.symbol.toUpperCase()}</span>
                                  </Button>
                                </DrawerClose>
                              ))}
                          </div>
                          {filteredTokens.map((coin) => (
                            <DrawerClose key={coin.id}>
                              <Button
                                onClick={() => handleCoinChange("to", coin)}
                                className="justify-between w-full mt-2 items-center gap-2 py-3 h-auto border border-[#2f3857] bg-transparent focus-within:bg-secondary hover:bg-inherit focus:hover:bg-secondary"
                              >
                                <span className="flex flex-col justify-start items-start">
                                  <span className="text-[13px]">
                                    {coin.symbol.toUpperCase()}
                                  </span>
                                  <span className="text-[11px] text-primary">
                                    {coin.name}
                                  </span>
                                </span>
                                <span className="flex gap-3 items-center">
                                  <Star size={16} className="text-primary" />
                                  <Image
                                    src={coin.image || "/ethereum-grey.png"}
                                    alt={coin.name}
                                    width={24}
                                    height={24}
                                  />
                                </span>
                              </Button>
                            </DrawerClose>
                          ))}
                        </div>
                      </div>
                      <DrawerClose className="absolute top-6 right-6">
                        <XIcon size={12} />
                      </DrawerClose>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 px-2.5">
              <p className="uppercase text-primary font-bold">Fastest Quote</p>
              <Switch />
            </div>
            {isConnected ? (
              <div className="flex items-center justify-between mt-5 px-2.5">
                <p className="uppercase text-primary font-bold">
                  RECIPIENT ADDRESS :
                </p>
                <Switch
                  checked={isAddressShow}
                  onCheckedChange={(e) => setIsAddressShow(!isAddressShow)}
                />
              </div>
            ) : null}

            {isAddressShow ? (
              <div className="flex items-center justify-between mt-5 px-2.5 py-2 border-gray-700 border rounded-sm">
                <p className="text-[10px] font-medium text-primary">
                  {address}
                </p>
                <FileEditIcon size={12} className="text-primary" />
              </div>
            ) : null}

            <RocketxConnectButton
              isNavbar={false}
              component={
                <Button
                  onClick={() => setIsConfirm(true)}
                  className={`uppercase p-10 h-auto text-base connect-btn font-bold relative ${
                    loadingCoins || loadingFromCoin || loadingToCoin
                      ? "loading"
                      : ""
                  }`}
                  disabled={
                    loadingCoins ||
                    loadingFromCoin ||
                    loadingToCoin ||
                    fromAmount === "0" ||
                    toAmount === "0" ||
                    !fromAmount
                  }
                >
                  {loadingCoins || loadingFromCoin || loadingToCoin
                    ? "Fetching Quote"
                    : "CROSS CHAIN SWAP"}
                  <span
                    className={`loader ${
                      loadingCoins || loadingFromCoin || loadingToCoin
                        ? ""
                        : "stop"
                    }`}
                  ></span>
                </Button>
              }
              connect={
                <Button
                  className={`uppercase p-10 h-auto text-base connect-btn font-bold relative ${
                    loadingCoins || loadingFromCoin || loadingToCoin
                      ? "loading"
                      : ""
                  }`}
                  disabled={loadingCoins || loadingFromCoin || loadingToCoin}
                >
                  {loadingCoins || loadingFromCoin || loadingToCoin
                    ? "Fetching Quote"
                    : "Connect Wallet"}
                  <span
                    className={`loader ${
                      loadingCoins || loadingFromCoin || loadingToCoin
                        ? ""
                        : "stop"
                    }`}
                  ></span>
                </Button>
              }
            />
            <div className="font-bold flex flex-col gap-2.5 p-5">
              <div className="flex items-center justify-between text-sm">
                <p>YOU SAVE</p>
                <p className="text-custom">~ $0.39</p>
              </div>
              <div className="w-full my-2.5">
                <Image
                  src="/divider.png"
                  alt="divider"
                  layout="responsive"
                  width={100}
                  height={2}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary">SLIPPAGE TOLERANCE :</p>
                <p>1.00 %</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary">PRICE IMPACT</p>
                <p>-0.5%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary">1 RVF(V2) BUY PRICE</p>
                <p>~ $0.0906</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary">1 ETH SELL PRICE</p>
                <p>~ $2,412.92</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary">PLATFORM FEE</p>
                <p>~ 0.20%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary">FEE DISCOUNT</p>
                <p>0%</p>
              </div>
            </div>
          </section>
        </div>
      </BlurFade>
      <ConfirmSwapModal
        onClose={() => setIsConfirm(false)}
        open={isConfirm}
        amount={toAmount}
      />
    </>
  );
}
