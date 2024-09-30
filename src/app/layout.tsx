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
    "RocketX offers the best rates on your crypto swaps by comparing prices across top centralized and decentralized exchanges, all in one convenient platform.",
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
            theme="dark"
            pauseOnFocusLoss={false}
          />
          <Providers>{children}</Providers>
        </WagmiRainbowKitProvider>
      </body>
    </html>
  );
}
