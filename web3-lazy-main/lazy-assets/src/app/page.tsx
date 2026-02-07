import { Button } from "@/components/ui/button";
import { ArrowRight, Moon, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 py-20 space-y-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-black/10 bg-white/50 px-3 py-1 text-sm font-medium backdrop-blur-sm">
          <span className="mr-2">💤</span> The Laziest Way to Wealth
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-2">
          Let Your Crypto <br /> Do The Work.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
          Set it. Forget it. Earn yield while you sleep. Your assets auto-transfer to loved ones if you ghost too long.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Link href="/dashboard">
            <Button size="lg" variant="lazy" className="text-lg h-14 px-8 rounded-full">
              START BEING LAZY
              <Moon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button size="lg" variant="lazy-outline" className="text-lg h-14 px-8 rounded-full">
              HOW IT WORKS
            </Button>
          </Link>
        </div>

        {/* Floating Abstract Elements (replacing with simple divs/SVGs if image not available) */}
        <div className="absolute top-1/3 left-10 -z-10 opacity-20 hidden lg:block animate-pulse">
          <Moon size={120} className="text-lazy-purple" />
        </div>
        <div className="absolute bottom-1/3 right-10 -z-10 opacity-20 hidden lg:block animate-bounce duration-[3000ms]">
          <div className="w-32 h-32 rounded-full bg-lazy-yellow blur-3xl"></div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20 bg-white/50 border-t border-black/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Problem vs. Solution</h2>
            <p className="text-lg text-muted-foreground">Why be active when you can be lazy?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-red-50 border border-red-100 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={200} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-700">The Hard Way</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl font-bold">×</span>
                  <span>Managing private keys is stressful.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl font-bold">×</span>
                  <span>20% of BTC is lost forever due to lost keys.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl font-bold">×</span>
                  <span>Capital sits idle without generating APY.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-green-50 border border-green-100 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={200} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">The Lazy Way</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl font-bold">✓</span>
                  <span>Auto-transfer assets if inactive for X months.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl font-bold">✓</span>
                  <span>Legacy Plan ensures wealth isn't lost.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl font-bold">✓</span>
                  <span>Auto-invest in DeFi protocols for compound growth.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
