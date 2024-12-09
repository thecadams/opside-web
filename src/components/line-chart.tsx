"use client"

import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Wallet Value",
                data: [4000, 4200, 4800, 5200, 5500, 5722],
                borderColor: "rgb(52, 211, 153)",
                tension: 0.4,
            },
            {
                label: "Earnings",
                data: [0, 50, 120, 180, 240, 289],
                borderColor: "rgb(96, 165, 250)",
                tension: 0.4,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                type: 'category' as const,
                display: false,
            },
            y: {
                type: 'linear' as const,
                display: false,
            },
        },
    };

    return <Line data={data} options={options} />
}

