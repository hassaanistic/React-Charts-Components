import './App.css'
import BarChart from './components/BarChart'
import ChartContainer from './components/ChartContainer'
import DoughnutChart from './components/DoughnutChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import PolarAreaChart from './components/PolarAreaChart'
import RadarDatasetChart from './components/RadarDatasetChart'

function App() {
  const sizeStr = " <Bar data={data} height={300} width={ 500}/> "
  return (
    <>
      <h2>Size is in the BAR chart </h2>
      <p>Height and width pass in the chart Component</p>
      <p>{sizeStr}</p>
      <ChartContainer />
      <BarChart />
      <LineChart />
      <PieChart />
      <DoughnutChart />
      <PolarAreaChart />
      <RadarDatasetChart />
    </>
  )
}

export default App
