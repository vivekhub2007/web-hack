
import { ActiveVault } from "@/components/dashboard/ActiveVault";
import { LazyTimer } from "@/components/dashboard/LazyTimer";
import { WealthGrowth } from "@/components/dashboard/WealthGrowth";
import { LegacyPlan } from "@/components/dashboard/LegacyPlan";
import { NFTBeneficiary } from "@/components/dashboard/NFTBeneficiary";

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-12 max-w-7xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-gray-200">
                <div>
                    <h1 className="text-4xl font-bold">My Dashboard</h1>
                    <p className="text-muted-foreground mt-2">Monitor your assets and legacy status.</p>
                </div>
                <div className="w-full md:w-auto">
                    <ActiveVault />
                </div>
            </div>

            {/* Section 1: Lazy Timer and Wealth Growth */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Activity & Growth</h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Lazy Timer - Left side */}
                    <div className="lg:col-span-5">
                        <LazyTimer />
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Wealth Growth Chart */}
                        <div>
                            <WealthGrowth />
                        </div>

                        {/* Legacy Plan Details */}
                        <div>
                            <LegacyPlan />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: NFT Beneficiary Gallery */}
            <section className="space-y-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">NFT Assets</h2>
                <NFTBeneficiary />
            </section>
        </div>
    );
}
