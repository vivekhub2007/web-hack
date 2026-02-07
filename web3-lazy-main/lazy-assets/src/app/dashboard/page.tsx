import { ActiveVault } from "@/components/dashboard/ActiveVault";
import { LazyTimer } from "@/components/dashboard/LazyTimer";
import { WealthGrowth } from "@/components/dashboard/WealthGrowth";
import { LegacyPlan } from "@/components/dashboard/LegacyPlan";

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">My Dashboard</h1>
                    <p className="text-muted-foreground">Monitor your assets and legacy status.</p>
                </div>
                <div className="w-full md:w-auto">
                    <ActiveVault />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
                {/* Lazy Timer - Takes up prominent space */}
                <div className="md:col-span-4 h-full">
                    <LazyTimer />
                </div>

                {/* Right Column Grid */}
                <div className="md:col-span-8 flex flex-col gap-6 h-full">
                    {/* Wealth Growth Chart */}
                    <div className="flex-1 min-h-[300px]">
                        <WealthGrowth />
                    </div>

                    {/* Legacy Plan Details */}
                    <div className="h-auto md:h-[180px]">
                        <LegacyPlan />
                    </div>
                </div>
            </div>
        </div>
    );
}
