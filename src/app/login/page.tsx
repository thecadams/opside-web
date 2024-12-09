"use client"

import { Button } from "@/components/ui/button"
import { useSDK } from "@metamask/sdk-react";

export default function SignInPage() {
    const { sdk } = useSDK();

    const connect = async () => {
        try {
            await sdk?.connect();
            window.location.href = '/overview';
        } catch (err) {
            console.warn("failed to connect..", err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col p-4">
            <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full gap-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-bold tracking-tighter text-emerald-400">OPSIDE</h1>
                    <h2 className="text-4xl font-bold">Finance</h2>
                    <div className="space-y-2 text-emerald-400/80">
                        <p>passive income</p>
                        <p>Keep control</p>
                    </div>
                </div>
                <div className="space-y-4 w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" onClick={connect}>
                        Connect Wallet
                    </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                    By Continuing you agree to the Terms and Conditions
                </p>
            </div>
        </div>
    )
}

