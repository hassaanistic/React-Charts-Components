import React, { useEffect, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';

const LineChart = () => {
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
    const data = {
        labels: labels,
        datasets: [{
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },

        {
            label: 'Second Dataset',
            data: [55, 99, 70, 41, 55, 45, 80],
            fill: true,
            borderColor: 'rgb(210, 131, 131)',
            tension: 0.1,
        },
        {
            label: 'Third Dataset',
            data: [40, 39, 20, 31, 25, 15, 30],
            fill: true,
            borderColor: 'rgb(36, 199, 24)',
            tension: 0.1,


        }
        ]
    };

    const chartRef = useRef(null);

    useEffect(() => {
        // Clean up and destroy the chart when the component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <h1>Line Chart</h1>
            <Line ref={chartRef} data={data}
                height={300}
                width={500} />

        </div>
    )
}

export default LineChart