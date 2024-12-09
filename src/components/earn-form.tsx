"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export function EarnForm() {
    const [amount, setAmount] = useState("0.5")
    const [date, setDate] = useState("Apr 21")
    const [price, setPrice] = useState("$1900")
    const [repeat, setRepeat] = useState(true)

    return (
        <Card className="p-6 bg-gray-900">
            <div className="space-y-6">
                <div className="flex justify-between">
                    <Button variant="default">Sell</Button>
                    <Button variant="outline">Buy</Button>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="amount">Amount:</Label>
                    <Input
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-gray-800"
                    />
                    <p className="text-sm text-muted-foreground">0.5 ETH available</p>
                </div>
                <div className="space-y-2">
                    <Label>Date:</Label>
                    <RadioGroup value={date} onValueChange={setDate} className="flex space-x-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Apr 14" id="apr14" />
                            <Label htmlFor="apr14">Apr 14</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Apr 21" id="apr21" />
                            <Label htmlFor="apr21">Apr 21</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Apr 28" id="apr28" />
                            <Label htmlFor="apr28">Apr 28</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="May 19" id="may19" />
                            <Label htmlFor="may19">May 19</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="space-y-2">
                    <Label>Price:</Label>
                    <RadioGroup value={price} onValueChange={setPrice} className="flex space-x-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="$1900" id="1900" />
                            <Label htmlFor="1900">$1900</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="$2000" id="2000" />
                            <Label htmlFor="2000">$2000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="$2100" id="2100" />
                            <Label htmlFor="2100">$2100</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="$2200" id="2200" />
                            <Label htmlFor="2200">$2200</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Wait time:</span>
                        <span>14 days</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Probability of sale:</span>
                        <span>47%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Passive income:</span>
                        <span>$36</span>
                    </div>
                    <div className="flex justify-between">
                        <span>APR:</span>
                        <span>99%</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch
                        id="repeat"
                        checked={repeat}
                        onCheckedChange={setRepeat}
                    />
                    <Label htmlFor="repeat">Repeat on expiration?</Label>
                </div>
                <Button className="w-full">Earn!</Button>
            </div>
        </Card>
    )
}

