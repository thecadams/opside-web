import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TabBar() {
    const pathname = usePathname();

    const tabs = [
        { label: 'Overview', path: '/overview' },
        { label: 'Details', path: '/details' },
        { label: 'Earn', path: '/earn' },
    ];

    return (
        <div className="w-full border-b">
            <div className="inline-flex h-10 w-full items-center justify-start rounded-md bg-muted p-1 text-muted-foreground">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.path;

                    const className = `inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive
                            ? 'bg-background text-foreground shadow-sm'
                            : 'hover:bg-background/50 hover:text-foreground'
                        }`;

                    return isActive ? (
                        <button
                            key={tab.path}
                            className={className}
                            disabled
                        >
                            {tab.label}
                        </button>
                    ) : (
                        <Link
                            key={tab.path}
                            href={tab.path}
                            className={className}
                        >
                            {tab.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}