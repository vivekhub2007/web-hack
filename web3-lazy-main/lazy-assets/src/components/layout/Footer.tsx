"use client";

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white/50 backdrop-blur-sm py-6 mt-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                        <p>&copy; 2026 Lazy Assets. All rights reserved.</p>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                        Created by <span className="font-semibold text-gray-900">Sayandeep</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
