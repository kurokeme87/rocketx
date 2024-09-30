import Image from "next/image";

export default function Table() {
    const data = [
        {
            exchange: "Paraswap",
            type: "DEX | INSTANT",
            logo: "/52015910.png",
            quote: "27,363.97 RVF(V2)",
            minReceived: "27,036.08 RVF(V2)",
            gasFee: "$0.64",
            youSave: "$0.39",
            fastest: true,
            best: true,
        },
        {
            exchange: "1INCH",
            type: "DEX | INSTANT",
            logo: "/1inch-token.webp",
            quote: "27,363.97 RVF(V2)",
            minReceived: "27,035.71 RVF(V2)",
            gasFee: "$1.00",
            youSave: "$0.00",
            fastest: false,
            best: false,
        },
        {
            exchange: "UniswapV2",
            type: "DEX | INSTANT",
            logo: "/256x256_Black-1.webp",
            quote: "27,363.97 RVF(V2)",
            minReceived: "27,090.33 RVF(V2)",
            gasFee: "$0.77",
            youSave: "",
            fastest: false,
            best: false,
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto px-0 p-6 md:px-6 border-separate border-spacing-y-5 mt-5 space-y-5">
                <thead className="align-bottom text-primary text-[11px]">
                    <tr>
                        <th className="px-5 py-2.5 text-left hidden lg:table-cell">EXCHANGE</th>
                        <th className="px-5 py-2.5 text-left">QUOTE</th>
                        <th className="px-5 py-2.5 text-left">MIN. RECEIVED</th>
                        <th className="px-5 py-2.5 text-left hidden lg:table-cell">GAS FEE</th>
                        <th className="px-5 py-2.5 text-left hidden lg:table-cell">YOU SAVE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="font-bold text-[11px] text-white rounded-md overflow-hidden">
                            <td className={`flex gap-1 md:gap-3 items-center rounded-l-md p-2 md:p-5 ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>
                                <span className="w-8 h-8 bg-slate-900 rounded-full p-1 flex flex-col justify-center items-center">
                                    <Image width={24} height={24} src={row.logo} alt={row.exchange} className="w-6 h-6 rounded-full" />
                                </span>
                                <span className="flex flex-col">
                                    <span className="uppercase">{row.exchange}</span>
                                    <span className="text-[10px] md:space-x-2 text-primary whitespace-nowrap">
                                        <span>{row.type}</span>
                                        <span className="lg:hidden text-[9px]">{row.gasFee}</span>
                                        {/* <span className="lg:hidden text-[9px]">You Save: {row.youSave}</span> */}
                                    </span>
                                    <span className="lg:hidden text-[9px]">{row.minReceived}</span>
                                </span>
                            </td>
                            <td className={`p-5 text-left hidden lg:table-cell  ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>
                                {row.quote}
                            </td>
                            <td className={`p-2 md:p-5 text-left ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>{row.minReceived}</td>
                            <td className={`p-5 text-left hidden lg:table-cell ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>{row.gasFee}</td>
                            <td className={`p-0 md:p-5 text-left rounded-r-md relative ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>
                                <span className="hidden lg:flex">{row.youSave}</span>
                                {row.fastest && <span className="text-[9px] absolute -left-36 sm:-left-9 -top-3 bg-yellow-400 text-black px-2 py-1 rounded ml-2">FASTEST</span>}
                                {row.best && <span className="text-[9px] absolute -top-3 -left-20 sm:left-5 bg-green-100 text-black px-2 py-1 rounded ml-2">BEST</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
