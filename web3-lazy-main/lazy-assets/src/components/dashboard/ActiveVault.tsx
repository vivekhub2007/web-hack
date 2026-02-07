import { Card } from "@/components/ui/card";

export function ActiveVault() {
    return (
        <Card className="bg-white border-2 border-lazy-purple p-4 shadow-[4px_4px_0px_#a855f7]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-red-500 rounded-full animate-ping absolute ml-1"></div>
                    <div className="h-3 w-3 bg-red-500 rounded-full relative z-10 block"></div>
                    <span className="font-bold text-lazy-purple">Active Vault</span>
                </div>
                <div className="text-sm font-mono bg-lazy-purple/10 text-lazy-purple px-2 py-1 rounded">
                    PID: 7721
                </div>
            </div>
        </Card>
    );
}
