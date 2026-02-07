"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image as LucideImage, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock NFT data - in a real app, this would come from the blockchain
const mockNFTs = [
    {
        id: 1,
        name: "Bored Ape #4521",
        collection: "Bored Ape Yacht Club",
        image: "/nft-images/ape1.jpg",
        contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e433211a0".substring(0, 10) + "...",
        tokenId: "4521",
        rarity: "Ultra Rare",
        floor: "2.5 ETH",
    },
    {
        id: 2,
        name: "Crypto Punk #3100",
        collection: "CryptoPunks",
        image: "/nft-images/cryptopunks.png",
        contractAddress: "0x06012c8cf97bead5deae237070f9587f8" + "...",
        tokenId: "3100",
        rarity: "Rare",
        floor: "12.3 ETH",
    },
    {
        id: 3,
        name: "Bored Ape #7832",
        collection: "Bored Ape Yacht Club",
        image: "/nft-images/ape2.jpg",
        contractAddress: "0x1234567890abcdef1234567890abcdef" + "...",
        tokenId: "7832",
        rarity: "Ultra Rare",
        floor: "2.8 ETH",
    },
];

export function NFTBeneficiary() {
    const [selectedNFT, setSelectedNFT] = useState<typeof mockNFTs[0] | null>(null);

    return (
        <>
            <Card className="border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 transition-all duration-300\">
                <CardHeader className="pb-6 space-y-0">
                    <div className="flex flex-row items-center justify-between space-y-0">
                        <div className="space-y-1">
                            <CardTitle className="text-purple-800 text-lg">NFT Beneficiary</CardTitle>
                            <p className="text-xs text-purple-600/80">View and manage your NFTs from the beneficiary wallet</p>
                        </div>
                        <LucideImage className="h-5 w-5 text-purple-600" />
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {mockNFTs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <LucideImage className="h-12 w-12 text-purple-300 mb-4" />
                            <p className="text-sm text-purple-600 font-medium">No NFTs found</p>
                            <p className="text-xs text-purple-500">NFTs from the beneficiary wallet will appear here</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {mockNFTs.map((nft) => (
                                <motion.button
                                    key={nft.id}
                                    onClick={() => setSelectedNFT(nft)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative overflow-hidden rounded-xl border-2 border-purple-200 bg-white/80 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300 text-left"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-purple-200 to-fuchsia-200 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                backgroundImage: `url('${nft.image}')`,
                                            }}
                                        >
                                            {/* Placeholder Image */}
                                            <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-fuchsia-400/20 flex items-center justify-center">
                                                <LucideImage className="h-8 w-8 text-purple-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 space-y-1">
                                        <p className="text-sm font-bold text-purple-900 truncate">{nft.name}</p>
                                        <p className="text-xs text-purple-600">{nft.collection}</p>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">{nft.rarity}</span>
                                            <span className="text-xs font-mono text-purple-700 font-semibold">{nft.floor}</span>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* NFT Details Modal */}
            <AnimatePresence>
                {selectedNFT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedNFT(null)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl border-2 border-purple-200 shadow-2xl p-6 max-w-md w-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-purple-900">NFT Details</h2>
                                <button
                                    onClick={() => setSelectedNFT(null)}
                                    className="text-purple-600 hover:text-purple-800 hover:bg-purple-100 p-2 rounded-lg transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* NFT Image */}
                            <div className="w-full aspect-square bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${selectedNFT.image}')`,
                                    }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-fuchsia-400/20 flex items-center justify-center">
                                        <LucideImage className="h-12 w-12 text-purple-400" />
                                    </div>
                                </div>
                            </div>

                            {/* NFT Details */}
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs font-semibold uppercase text-purple-600 mb-1">Name</p>
                                    <p className="text-sm font-bold text-purple-900">{selectedNFT.name}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase text-purple-600 mb-1">Collection</p>
                                    <p className="text-sm text-purple-800">{selectedNFT.collection}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xs font-semibold uppercase text-purple-600 mb-1">Rarity</p>
                                        <p className="text-sm font-semibold text-purple-800">{selectedNFT.rarity}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase text-purple-600 mb-1">Floor Price</p>
                                        <p className="text-sm font-semibold text-purple-800">{selectedNFT.floor}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase text-purple-600 mb-1">Token ID</p>
                                    <p className="text-sm font-mono text-purple-800 break-all">{selectedNFT.tokenId}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase text-purple-600 mb-1">Contract</p>
                                    <p className="text-xs font-mono text-purple-700 break-all">{selectedNFT.contractAddress}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button
                                    onClick={() => setSelectedNFT(null)}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                >
                                    Close
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
