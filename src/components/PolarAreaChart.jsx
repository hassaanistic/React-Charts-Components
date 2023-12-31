import React from 'react'
import { PolarArea } from 'react-chartjs-2'


const PolarAreaChart = () => {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    };
    return (
        <>
            <h1>PolarArea</h1>
            <PolarArea data={data} height={300}
                width={500} />
        </>
    )
}


export default PolarAreaChart