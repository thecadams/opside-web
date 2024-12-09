import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, DollarSign, EclipseIcon as Ethereum } from 'lucide-react'

interface AssetCardProps {
    icon: "eth" | "btc" | "usdc"
    amount: string
    value: string
    currentValue: string
    date?: string
    badge?: string
    color: "emerald" | "orange" | "pink"
}

export function AssetCard({
    icon,
    amount,
    value,
    currentValue,
    date,
    badge,
    color,
}: AssetCardProps) {
    const Icon = {
        eth: Ethereum,
        btc: Bitcoin,
        usdc: DollarSign,
    }[icon]

    const colors = {
        emerald: "bg-emerald-400",
        orange: "bg-orange-400",
        pink: "bg-pink-400",
    }

    return (
        <Card className="p-4 bg-gray-900">
            <div className="flex justify-between items-start">
                <div className="space-y-3">
                    <div className={`w-8 h-8 rounded-full ${colors[color]} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-black" />
                    </div>
                    <div>
                        <p className="text-xl font-bold">{amount}</p>
                        <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                    <p className="text-sm">{currentValue}</p>
                </div>
                <div className="space-y-2 text-right">
                    {date && (
                        <Badge variant="outline" className={`text-${color}-400 border-${color}-400/20`}>
                            {date}
                        </Badge>
                    )}
                    {badge && (
                        <Badge variant="outline" className={`text-${color}-400 border-${color}-400/20`}>
                            {badge}
                        </Badge>
                    )}
                </div>
            </div>
        </Card>
    )
}

