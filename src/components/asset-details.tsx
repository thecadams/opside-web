import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, DollarSign, EclipseIcon as Ethereum } from 'lucide-react'

interface AssetDetailsProps {
    icon: "eth" | "btc" | "usdc"
    amount: string
    value: string
    currentValue: string
    incomeCollected: string
    apr: string
    expiration: string
    daysRemaining: number
    sellPrice: string
    probabilityOfSale: number
}

export function AssetDetails({
    icon,
    amount,
    value,
    currentValue,
    incomeCollected,
    apr,
    expiration,
    daysRemaining,
    sellPrice,
    probabilityOfSale,
}: AssetDetailsProps) {
    const Icon = {
        eth: Ethereum,
        btc: Bitcoin,
        usdc: DollarSign,
    }[icon]

    return (
        <Card className="p-6 bg-gray-900">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{amount}</h3>
                    <p className="text-sm text-muted-foreground">{value}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-sm text-muted-foreground">Income collected:</p>
                    <p className="text-lg font-semibold">{incomeCollected}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">APR:</p>
                    <p className="text-lg font-semibold">{apr}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-sm text-muted-foreground">Expiration:</p>
                    <Badge variant="outline" className="mt-1">
                        {expiration}
                    </Badge>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Days remaining:</p>
                    <p className="text-lg font-semibold">{daysRemaining}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground">Sell Price:</p>
                    <p className="text-lg font-semibold">{sellPrice}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Probability of sale:</p>
                    <p className="text-lg font-semibold">{probabilityOfSale}%</p>
                </div>
            </div>
        </Card>
    )
}

