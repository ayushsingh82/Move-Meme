"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { holesky } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [holesky],
    transports: {
      // RPC URL for each chain
      [holesky.id]: http(
        `	https://rpc.testnet.frax.com`,
      ),
    },
     // Required API Keys
     walletConnectProjectId: "",

     // Required App Info
     appName: "Your App Name",
 
     // Optional App Info
     appDescription: "Your App Description",
     appUrl: "https://family.co", // your app's url
     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
   }),
  
);

const queryClient = new QueryClient();

const Providers = ({ children }:any) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default Providers;