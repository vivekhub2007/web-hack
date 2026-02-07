"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Edit2, Save, X } from "lucide-react";

export function LegacyPlan() {
    const [isEditing, setIsEditing] = useState(false);
    const [wallet, setWallet] = useState("0x1234...7890");
    const [days, setDays] = useState(90);

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, this would save to the contract/backend
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset to "saved" state if needed, but for now we keep local state as the source of truth
    };

    return (
        <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-blue-800 text-lg">Legacy Plan</CardTitle>
                <Lock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-blue-900/60">Beneficiary Wallet</label>
                    {isEditing ? (
                        <Input
                            value={wallet}
                            onChange={(e) => setWallet(e.target.value)}
                            className="bg-white/80 border-blue-200 text-blue-900"
                        />
                    ) : (
                        <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-lg border border-blue-100">
                            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full h-6 w-6 shrink-0"></div>
                            <span className="text-sm font-mono truncate w-full text-blue-900">{wallet}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-blue-900/60">Inactivity Period</label>
                    {isEditing ? (
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                value={days}
                                onChange={(e) => setDays(Number(e.target.value))}
                                className="bg-white/80 border-blue-200 text-blue-900 w-24"
                            />
                            <span className="text-sm text-blue-800 font-medium">Days</span>
                        </div>
                    ) : (
                        <div className="bg-white/60 p-3 rounded-lg border border-blue-100 flex justify-between items-center">
                            <span className="text-sm font-bold text-blue-900">{days} Days</span>
                        </div>
                    )}
                </div>

                <div className="pt-4">
                    {isEditing ? (
                        <div className="flex gap-2">
                            <Button onClick={handleSave} size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                <Save className="h-3 w-3 mr-2" /> Save
                            </Button>
                            <Button onClick={handleCancel} size="sm" variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                                <X className="h-3 w-3 mr-2" /> Cancel
                            </Button>
                        </div>
                    ) : (
                        <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-colors">
                            <Edit2 className="h-3 w-3 mr-2" /> Edit Plan
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

