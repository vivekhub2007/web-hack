"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Home, LayoutDashboard, Wallet } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "How it Works", href: "/#how-it-works", icon: Moon },
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-lazy-yellow border border-black/20">
                            <span className="text-lg">💤</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">LAZY ASSETS</span>
                    </Link>
                </div>

                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {/* Mock Wallet Button */}
                    <Button variant="lazy" size="sm" className="rounded-full">
                        <Wallet className="mr-2 h-4 w-4" />
                        0x742D...F44E
                    </Button>
                </div>
            </div>
        </header>
    );
}
