"use client"

import ProfilePopover from "@/components/profile-popover"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useSDK } from "@metamask/sdk-react"
import { MetaMaskAvatar } from "react-metamask-avatar"

export default function ProfilePage() {
    const { account } = useSDK();

    return (
        <div className="min-h-screen p-4 space-y-6">
            <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold">Profile</h1>
                <ProfilePopover />
            </div>
            <Card className="p-6 bg-gray-900">
                <div className="flex flex-col items-center space-y-4">
                    <MetaMaskAvatar address={account ?? ''} size={40} />
                    <h2 className="text-2xl font-bold">MonicaHall.eth</h2>
                    <p className="text-sm text-muted-foreground">monicahall@opsidefinance.com</p>
                    <p className="text-xs text-muted-foreground">0x6O9p14S1l14d3E506009004002098dEa</p>
                    <Button variant="outline">Edit Profile</Button>
                </div>
            </Card>
            <Card className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold mb-4">Notifications</h3>
                <div className="flex items-center justify-between">
                    <span>Turn on Notifications</span>
                    <Switch />
                </div>
            </Card>
            <Card className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold mb-4">Invite Link</h3>
                <div className="flex items-center justify-between">
                    <span>Invite people</span>
                    <Button variant="outline">Invite</Button>
                </div>
            </Card>
            <Button variant="outline" className="w-full">Log out</Button>
        </div>
    )
}

