import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Providers from "./providers";
import WagmiRainbowKitProvider from "../components/Providers/WagmiRainbowKitProvider";
import "./globals.css";
import "./animate.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700", "600", "800", "900", "300"],
  subsets: ["latin"],
  variable: "--font-dm_Sans",
});

export const metadata: Metadata = {
  title: "RocketX",
  description:
    "RocketX exchange aggregates both the Centralized and Decentralized Crypto Exchanges and enable users to get the best rates to swap tokens.",
  keywords: "rocketx exchange, rocketx, Rockets Vault Rockets Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} ${dm_sans.variable} antialiased`}>
        <WagmiRainbowKitProvider>
          <ToastContainer
            autoClose={3000}
            theme="colored"
            pauseOnFocusLoss={false}
          />
          <Providers>{children}</Providers>
        </WagmiRainbowKitProvider>
      </body>
    </html>
  );
}
