import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = () => {

    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
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


    // Example of using state to manage data
const [chartData, setChartData] = useState({
    labels:  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'My First Dataset',
      data: [],
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
  });
  
  useEffect(() => {
    const fetchData = () => {
      // Fetch new data and update chartData
      const newData = /* logic to get new data */
      setChartData({
        ...chartData,
        labels: newData.labels,
        datasets: [{
          ...chartData.datasets[0],
          data: newData.data
        }]
      });
    };
  
    // Fetch data initially
    fetchData();
  
    // Schedule automatic updates (e.g., every 5 seconds)
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [/* dependencies for the effect */]);

    return (
        <>
            <h1>BarChart</h1>
            <div >
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