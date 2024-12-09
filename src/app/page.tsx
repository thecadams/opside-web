"use client"

import { useSDK } from "@metamask/sdk-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { account } = useSDK();

  const router = useRouter();

  if (account) {
    window.location.href = '/overview';
  } else {
    window.location.href = '/login';
  }
}

