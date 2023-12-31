import React from 'react'

import { Pie } from 'react-chartjs-2'
const PieChart = () => {

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            hoverBackgroundColor: "red"
        }]
    };

    //second perspective
    // const data = {
    //     labels: [
    //         'Red',
    //         'Blue',
    //         'Yellow'
    //     ],
    //     datasets: [
    //         {
    //             label: 'My First Dataset',
    //             data: [300],
    //             backgroundColor: [
    //                 'rgb(255, 99, 132)',
    //             ],
    //             hoverOffset: 4,
    //         },
    //         {
    //             label: 'My second Dataset',
    //             data: [900],
    //             backgroundColor: [
    //                 'rgb(255, 205, 86)'
    //             ],
    //             hoverOffset: 4,
    //         },
    //         {
    //             label: 'My third Dataset',
    //             data: [400],
    //             backgroundColor: [
    //                 'rgb(54, 162, 235)',
    //             ],
    //             hoverOffset: 4,
    //         },
    //         {
    //             label: 'My fourth Dataset',
    //             data: [100],
    //             backgroundColor: [
    //                 'rgb(70, 180, 19)',
    //             ],
    //             hoverOffset: 4,
    //         },
    //     ]
    // };

    return (
        <>
            <h1>PieChart</h1>
            <Pie data={data} height={300}
                width={500} />
        </>

    )
}

export default PieChart