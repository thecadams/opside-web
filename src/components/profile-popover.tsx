import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { User, LogOut } from "lucide-react";
import { useSDK } from '@metamask/sdk-react';
import { MetaMaskAvatar } from 'react-metamask-avatar';

const ProfilePopover = () => {
    const { sdk, account } = useSDK();

    const handleLogout = () => {
        sdk?.disconnect();
        window.location.href = '/';
    };

    return (
        <Popover>
            <PopoverTrigger>
                <MetaMaskAvatar address={account ?? ''} size={40} className="cursor-pointer hover:opacity-80 transition-opacity" />
            </PopoverTrigger>
            <PopoverContent className="w-128">
                <div className="space-y-4">
                    <Link
                        href="/profile"
                        className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1.5 rounded-md transition-colors"
                    >
                        <User className="w-4 h-4" />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">{account}</span>
                            <span className="text-xs text-gray-500">Signed in via Metamask</span>
                        </div>
                    </Link>

                    <Link
                        href="/profile"
                        className="flex items-center space-x-2 w-full px-2 py-1.5 text-sm hover:bg-gray-50 rounded-md transition-colors"
                    >
                        <User className="w-4 h-4" />
                        <span>View Profile</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Log out</span>
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ProfilePopover;