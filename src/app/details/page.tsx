"use client"

import { AssetCard } from "@/components/asset-card"
import { AssetDetails } from "@/components/asset-details"
import ProfilePopover from "@/components/profile-popover"
import TabBar from "@/components/tab-bar"

export default function DetailsPage() {
    return (
        <div className="min-h-screen p-4 space-y-6">
            <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold">Details</h1>
                <ProfilePopover />
            </div>
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Hello,</h2>
                    <h3 className="text-3xl font-bold mb-1">MonicaHall.eth</h3>
                    <p className="text-sm text-muted-foreground">0x6O9p14S1l14d3E506009004002098dEa</p>
                </div>
                <TabBar />
                <AssetDetails
                    icon="eth"
                    amount="0.9 ETH"
                    value="$1,866 USD"
                    currentValue="$1,679 USD"
                    incomeCollected="$41"
                    apr="63%"
                    expiration="Apr 14"
                    daysRemaining={7}
                    sellPrice="$2000"
                    probabilityOfSale={24}
                />
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

