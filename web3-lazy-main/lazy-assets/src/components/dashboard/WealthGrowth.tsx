"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const dataRanges = {
    "1M": [
        { name: 'Week 1', value: 1.000 },
        { name: 'Week 2', value: 1.002 },
        { name: 'Week 3', value: 1.005 },
        { name: 'Week 4', value: 1.008 },
    ],
    "6M": [
        { name: 'Jan', value: 1.000 },
        { name: 'Feb', value: 1.005 },
        { name: 'Mar', value: 1.012 },
        { name: 'Apr', value: 1.020 },
        { name: 'May', value: 1.025 },
        { name: 'Jun', value: 1.035 },
    ],
    "1Y": [
        { name: 'Q1', value: 1.000 },
        { name: 'Q2', value: 1.020 },
        { name: 'Q3', value: 1.045 },
        { name: 'Q4', value: 1.080 },
    ]
};

export function WealthGrowth() {
    const [range, setRange] = useState<"1M" | "6M" | "1Y">("6M");

    // Calculate generic yield for display based on current mock data end value
    const currentData = dataRanges[range];
    const lastValue = currentData[currentData.length - 1].value;
    const yieldEarned = (lastValue - 1.0).toFixed(4);

    return (
        <Card className="border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="flex flex-row items-center justify-between pb-6 space-y-0">
                <div className="space-y-1">
                    <CardTitle className="text-green-800">Wealth Growth</CardTitle>
                    <CardDescription>Projected growth via Aave v3 APY</CardDescription>
                </div>
                <div className="flex bg-white/50 p-1 rounded-lg">
                    {(["1M", "6M", "1Y"] as const).map((r) => (
                        <button
                            key={r}
                            onClick={() => setRange(r)}
                            className={cn(
                                "px-3 py-1 text-xs font-bold rounded-md transition-all",
                                range === r ? "bg-green-500 text-white shadow-sm" : "text-green-700 hover:bg-green-100"
                            )}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart
                            data={currentData}
                            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#86efac" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#86efac" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#bbf7d0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#166534', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#166534', fontSize: 12 }} domain={['dataMin', 'auto']} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ color: '#166534', fontWeight: 'bold' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" animationDuration={1000} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">Principal</p>
                        <p className="text-lg font-bold">1.0000 ETH</p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-muted-foreground">Yield Earned ({range})</p>
                        <p className="text-lg font-bold text-green-600">+{yieldEarned} ETH</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
