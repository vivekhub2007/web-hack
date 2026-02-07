"use client";

import * as React from "react";
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
    lightTheme,
} from "@rainbow-me/rainbowkit";
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
    mainnet,
    sepolia,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";

const { wallets } = getDefaultWallets();

// Using a public Project ID for demo purposes. In production, use your own from WalletConnect Cloud.
// Project ID is required for WalletConnect.
const config = getDefaultConfig({
    appName: "Lazy Assets",
    projectId: "YOUR_PROJECT_ID", // Replace with env variable in production
    wallets: [
        ...wallets,
        {
            groupName: "Other",
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [
        mainnet,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
    ],
    ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={lightTheme({
                        accentColor: '#a855f7', // lazy-purple
                        accentColorForeground: 'white',
                        borderRadius: 'large',
                    })}
                    coolMode
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
