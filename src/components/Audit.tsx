import Image from "next/image";
import Footer from "./Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


interface RoadmapItem {
    title: string;
    items: string[];
}

const roadmapData: { [key: string]: RoadmapItem } = {
    "Q1": {
        title: "Q1",
        items: [
            "Q1",
            "New Blockchains Integration",
            "Improved User Experience",
            "Additional Wallet Support",
            "Support 125+ Blockchains",
            "Daily $RVF Burn 🔥"
        ]
    },
    "Q2": {
        title: "Q2",
        items: [
            "Q2",
            "Walletless Swap Web App Launch",
            "Walletless Swap APIs Launch",
            "Daily Burn 🔥 & Buybacks",
            "New Blockchains Integration",
            "New Exchange/Bridge Integration",
            "Support 150+ Blockchains"
        ]
    },
    "H2 - 2024": {
        title: "H2 - 2024",
        items: [
            "H2 - 2024",
            "Swap Widget",
            "New Exchange/Bridge Integration",
            "Faster Routes",
            "Daily $RVF Buybacks",
            "Rebranding",
            "Partnerships",
            "Dashboard",
            "New Blockchains Integration",
            "Support 200+ Blockchains"
        ]
    },
    "a2025": {
        title: "2025",
        items: [
            "2025",
            "Android Mobile App - Launch",
            "iOS Mobile App - Launch",
            "Limit Order",
            "Partnerships",
            "Daily $RVF Buybacks",
            "Support 200+ Blockchains"
        ]
    }
};


export default function Audit() {
    return (
        <div className="audit-wrapper">
            <div className="relative z-[3] w-full pt-24 pb-48 overflow-hidden">
                <div className="pixel-face hidden"></div>
                <div className="laser block"></div>
                <div className="relative pt-64">
                    <div className="transform w-[399px] h-[415px] relative mx-auto mb-24 -translate-y-2.5 scale-100">
                        <div className="audit-orb-icon"></div>
                        <div className="audit-orb"></div>
                        <div className="audit-orb-explode block"></div>
                    </div>
                    <div className="relative w-full text-center font-black text-white text-[80px] md:text-[100px] tracking-tighter">
                        <h2 className="backup-headline referral-headline leading-[120px] text-black w-full absolute left-0 top-[-30px] ms500">Securely</h2>
                        <h2 className="z-[2] relative pt-6 md:pt-0 md:mt-10 text-[72px] md:text-[120px] text-white ms500">Audited</h2>
                    </div>

                    <p className="text-primary leading-[42px] tracking-wide z-10 relative px-5 md:px-0 md:w-3/5 pb-8 text-2xl m-auto text-center">
                        At RocketX Exchange, security is always at the forefront of our minds. Weve undergone multiple security audits and continuously revise our audits with every major update. With RocketX Exchange, you can trade with peace of mind, knowing that your trades are protected by the highest levels of security. So why settle for a less secure exchange when you can trade on RocketX Exchange - the safest exchange in the market.
                    </p>
                    <ul className="list-none relative pt-24 md:w-3/5 mx-auto grid place-items-center gap-16 md:gap-0 md:grid-cols-2">
                        <li className="zokyo box-sizing">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src="/zokyo.png" width={160} height={160} alt="zokyo-logo" className="ms500" />
                            </a>
                        </li>
                        <li className="nii box-sizing">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src="/nii.png" width={160} height={160} alt="nii-logo" className="ms500" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full relative z-30 overflow-x-hidden h-full pt-24">
                <div className="new1-container ms500 show" id="new1">
                    <div className="md:px-12 px-5 z-10 relative m-auto">
                        <div className="relative w-full mt-24">
                            <div className="w-[2000px] h-[1px] border-t border-dashed border-white/15 absolute left-[650px] top-1/2 mt-[-60px]">
                                <div className="w-10 h-10 rounded-full border border-dashed border-white/15 absolute left-[-42px] top-[-22px]">
                                    <div className="roadmap-shape-1-inner"></div>
                                </div>
                                <div className="roadmap-shape-2"></div>
                                <div className="roadmap-shape-3">
                                    <div className="roadmap-shape-3-inner"></div>
                                </div>
                            </div>
                            <h2 className="roadmap-headline backup-headline text-[60px] md:text-[100px] leading-[120px] tracking-tighter w-full absolute left-0 top-[-60px] font-black ms500">2024</h2>
                            <div className="navigator backup-headline absolute left-36 md:left-[270px] top-[-30px] font-bold z-[200] cursor-pointer text-[40px] md:text-[60px] w-max ms500" id="showNew">2023</div>
                            <div className="navigator backup-headline absolute left-64 md:left-[430px] top-[-30px] font-bold z-[200] cursor-pointer text-[40px] md:text-[60px] w-max ms500" id="showOld">2022</div>
                            <h2 className="text-white text-[60px] md:text-[100px] w-full text-left tracking-tighter z-20 relative leading-[100px] mt-10 font-black">Roadmap</h2>
                        </div>
                        {/* Tabs for mobile */}
                        <Tabs defaultValue="Q1" className="w-full md:hidden">
                            <TabsList className="grid w-full grid-cols-4">
                                {Object.keys(roadmapData).map((key) => (
                                    <TabsTrigger key={key} value={key}>
                                        {roadmapData[key].title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {Object.keys(roadmapData).map((key) => (
                                <TabsContent key={key} value={key}>
                                    <div className="p-5 text-center pt-20">
                                        <ul className="list-none text-white">
                                            {roadmapData[key].items.map((item, index) => (
                                                <li key={index} className={`py-2 ${index == 0 ? 'font-bold text-white pb-8 text-5xl' : 'text-white text-2xl py-4'}`}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                        <ul className="md:pt-24 hidden md:grid pt-5 relative font-normal ms500 sm:grid-cols-2 gap-10 lg:grid-cols-4">
                            <li className="box-sizing">
                                <h4 className="text-2xl text-white pb-8 relative inline-block font-bold">Q1</h4>
                                <div className="roadmap-item active">New Blockchains Integration</div>
                                <div className="roadmap-item active">Improved User Experience</div>
                                <div className="roadmap-item active">Additional Wallet Support</div>
                                <div className="roadmap-item active">Support 125+ Blockchains</div>
                                <div className="roadmap-item active">Daily $RVF Burn 🔥</div>
                            </li>
                            <li className="box-sizing">
                                <h4 className="text-2xl text-white pb-8 relative inline-block font-bold">Q2</h4>
                                <div className="roadmap-item active">Walletless Swap Web App Launch</div>
                                <div className="roadmap-item active">Walletless Swap APIs Launch</div>
                                <div className="roadmap-item active">Daily Burn 🔥 &amp; Buybacks</div>
                                <div className="roadmap-item active">New Blockchains Integration</div>
                                <div className="roadmap-item active">New Exchange/Bridge Integration</div>
                                <div className="roadmap-item active">Support 150+ Blockchains</div>
                            </li>
                            <li className="box-sizing">
                                <h4 className="text-2xl text-white pb-8 relative inline-block font-bold">H2 - 2024</h4>
                                <div className="roadmap-item">Swap Widget</div>
                                <div className="roadmap-item">New Exchange/Bridge Integration</div>
                                <div className="roadmap-item">Faster Routes</div>
                                <div className="roadmap-item">Daily $RVF Buybacks</div>
                                <div className="roadmap-item">Rebranding</div>
                                <div className="roadmap-item">Partnerships</div>
                                <div className="roadmap-item">Dashboard</div>
                                <div className="roadmap-item">New Blockchains Integration</div>
                                <div className="roadmap-item">Support 200+ Blockchains</div>
                            </li>
                            <li className="box-sizing">
                                <h4 className="text-2xl text-white pb-8 relative inline-block font-bold">2025</h4>
                                <div className="roadmap-item">Android Mobile App - Launch</div>
                                <div className="roadmap-item">iOS Mobile App - Launch</div>
                                <div className="roadmap-item">Limit Order</div>
                                <div className="roadmap-item">Partnerships</div>
                                <div className="roadmap-item">Daily $RVF Buybacks</div>
                                <div className="roadmap-item">Support 200+ Blockchains</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}