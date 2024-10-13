import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { arbitrum, mainnet } from "@reown/appkit/networks";

const storage = createStorage({
  storage: cookieStorage, // Correctly define the storage
});

// Get projectId from https://cloud.reown.com
export const projectId = "d83a9d3860db6d32af24ee7229cfec17";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

//Set up the Wagmi Adapter (Config)
export const wagmiAdap = new WagmiAdapter({
  storage,
  networks: [mainnet, arbitrum],
  projectId,
  ssr: true,
});

export const config = wagmiAdap.wagmiConfig;
