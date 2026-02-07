"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image as LucideImage, Edit2, Save, X } from "lucide-react";

export function NFTBeneficiary() {
    const [isEditing, setIsEditing] = useState(false);
    const [nftAddress, setNftAddress] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [beneficiary, setBeneficiary] = useState("");

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, this would save to the contract/backend
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset to "saved" state if needed
    };

    return (
        <Card className="h-full border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-purple-800 text-lg">NFT Beneficiary</CardTitle>
                <LucideImage className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-purple-900/60">NFT Contract Address</label>
                    {isEditing ? (
                        <Input
                            value={nftAddress}
                            onChange={(e) => setNftAddress(e.target.value)}
                            className="bg-white/80 border-purple-200 text-purple-900"
                            placeholder="0x..."
                        />
                    ) : (
                        <div className="flex items-center space-x-2 bg-white/60 p-2 rounded-lg border border-purple-100">
                            <span className="text-sm font-mono truncate w-full text-purple-900">{nftAddress || "Not set"}</span>
                        </div>
                    )}
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-purple-900/60">Token ID</label>
                    {isEditing ? (
                        <Input
                            value={tokenId}
                            onChange={(e) => setTokenId(e.target.value)}
                            className="bg-white/80 border-purple-200 text-purple-900"
                            placeholder="e.g. 1"
                        />
                    ) : (
                        <div className="flex items-center space-x-2 bg-white/60 p-2 rounded-lg border border-purple-100">
                            <span className="text-sm font-mono truncate w-full text-purple-900">{tokenId || "Not set"}</span>
                        </div>
                    )}
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-purple-900/60">Beneficiary Wallet</label>
                    {isEditing ? (
                        <Input
                            value={beneficiary}
                            onChange={(e) => setBeneficiary(e.target.value)}
                            className="bg-white/80 border-purple-200 text-purple-900"
                            placeholder="0x..."
                        />
                    ) : (
                        <div className="flex items-center space-x-2 bg-white/60 p-2 rounded-lg border border-purple-100">
                            <span className="text-sm font-mono truncate w-full text-purple-900">{beneficiary || "Not set"}</span>
                        </div>
                    )}
                </div>
                <div className="pt-2">
                    {isEditing ? (
                        <div className="flex gap-2">
                            <Button onClick={handleSave} size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                <Save className="h-3 w-3 mr-2" /> Save
                            </Button>
                            <Button onClick={handleCancel} size="sm" variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                                <X className="h-3 w-3 mr-2" /> Cancel
                            </Button>
                        </div>
                    ) : (
                        <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-100 hover:text-purple-800 transition-colors">
                            <Edit2 className="h-3 w-3 mr-2" /> Edit NFT Beneficiary
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
