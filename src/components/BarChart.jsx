import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = () => {

    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

    // const data = { //this dat is the whole data like information of the CHARt we pass to the chart component 
    //     // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     labels: labels,
    //     //this dataSet is the data we want to display in the chart
    //     datasets: [
    //         {
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             borderWidth: 1,
    //             backgroundColor: "pink"
    //         },
    //         {
    //             label: 'MOYE',
    //             data: [20, 15, 13, 15, 12, 3],
    //             borderWidth: 1
    //         },
    //         {
    //             label: 'MOYE2',
    //             data: [16, 17, 18, 19, 20, 13],
    //             borderWidth: 1,
    //             backgroundColor: "red"
    //         }
    //     ]
    // }

    const data = {
        labels: labels,
        height: "100vh",
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    const chartStyle = {
        height: '40vh', // Adjust the height as per your requirement
        width: '100%', // Adjust the width as per your requirement
    };

    return (
        <>
            <div>BarChart</div>
            <div style={chartStyle}>
                <Bar
                    options={options}
                    data={data}
                    height={300}
                    width={500}
                />
            </div>


        </>
    )
}

export default BarChart