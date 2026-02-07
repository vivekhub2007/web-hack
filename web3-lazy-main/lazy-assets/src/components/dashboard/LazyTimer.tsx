"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function LazyTimer() {
    const [daysLeft, setDaysLeft] = useState(89);
    const [resetting, setResetting] = useState(false);

    const resetTimer = () => {
        setResetting(true);
        setTimeout(() => {
            setDaysLeft(90);
            setResetting(false);
        }, 1000);
    };

    return (
        <Card className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border-orange-100">
            <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
                <h3 className="text-lg font-semibold text-orange-900 tracking-wide">LAZY TIMER</h3>

                <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Outer Ring */}
                    <svg className="absolute w-full h-full transform -rotate-90">
                        <circle
                            cx="50%"
                            cy="50%"
                            r="80"
                            stroke="#fed7aa" // orange-200
                            strokeWidth="12"
                            fill="transparent"
                        />
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r="80"
                            stroke="#f97316" // orange-500
                            strokeWidth="12"
                            fill="transparent"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: 502, strokeDashoffset: 502 }}
                            animate={{
                                strokeDashoffset: resetting ? 502 : 502 - (502 * daysLeft) / 90
                            }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                    </svg>

                    <div className="flex flex-col items-center z-10">
                        <motion.span
                            className="text-5xl font-black text-orange-600"
                            key={daysLeft}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            {daysLeft}
                        </motion.span>
                        <span className="text-sm font-medium text-orange-800 uppercase tracking-widest">Days Left</span>
                    </div>
                </div>

                <div className="text-center">
                    <div className="text-xs text-orange-600/80 mb-2 font-mono">Status: ACTIVE</div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={resetTimer}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 shadow-lg shadow-orange-500/30"
                        >
                            I'M AWAKE!
                        </Button>
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-4 max-w-[200px] mx-auto">
                        Pressing this resets the timer back to 90 days.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
