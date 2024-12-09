"use client"

import { Card } from "@/components/ui/card"
import { LineChart } from "@/components/line-chart"
import { AssetCard } from "@/components/asset-card"
import ProfilePopover from "@/components/profile-popover"
import TabBar from "@/components/tab-bar"

export default function OverviewPage() {
    return (
        <div className="min-h-screen p-4 space-y-6">
            <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold">Home</h1>
                <ProfilePopover />
            </div>
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Hello,</h2>
                    <h3 className="text-3xl font-bold mb-1">MonicaHall.eth</h3>
                    <p className="text-sm text-muted-foreground">0x6O9p14S1l14d3E506009004002098dEa</p>
                </div>
                <TabBar />
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Wallet Value</p>
                            <p className="text-2xl font-bold text-emerald-400">$5,722</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Earnings</p>
                            <p className="text-2xl font-bold text-blue-400">$289</p>
                        </div>
                    </div>
                    <Card className="p-4">
                        <LineChart />
                    </Card>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xl font-bold">Earning Assets</h4>
                    <div className="grid gap-4">
                        <AssetCard
                            icon="eth"
                            amount="0.9 ETH"
                            value="$1,866 USD"
                            currentValue="$1,679 USD"
                            date="Apr 14"
                            color="emerald"
                        />
                        <AssetCard
                            icon="btc"
                            amount="0.1 BTC"
                            value="$28,210 USD"
                            currentValue="$2,821 USD"
                            date="Apr 28"
                            color="orange"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xl font-bold">HODL Assets</h4>
                    <div className="grid gap-4">
                        <AssetCard
                            icon="usdc"
                            amount="289 USDC"
                            value="$1.00 USD"
                            currentValue="$289 USD"
                            badge="HODL"
                            color="pink"
                        />
                        <AssetCard
                            icon="eth"
                            amount="0.5 ETH"
                            value="$1,866 USD"
                            currentValue="$933 USD"
                            badge="HODL"
                            color="emerald"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

