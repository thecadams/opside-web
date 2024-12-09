'use client'

import { MetaMaskProvider } from '@metamask/sdk-react'

export default function MetamaskProviderWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <MetaMaskProvider sdkOptions={{
            dappMetadata: {
                name: "Opside Finance",
                url: '/',
            },
            infuraAPIKey: process.env.INFURA_API_KEY,
        }}>
            {children}
        </MetaMaskProvider>
    )
}