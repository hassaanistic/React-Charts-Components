import './App.css'
import BarChart from './components/BarChart'
import ChartContainer from './components/ChartContainer'
import DoughnutChart from './components/DoughnutChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import PolarAreaChart from './components/PolarAreaChart'
import RadarDatasetChart from './components/RadarDatasetChart'

function App() {
  return (
    <>
      <h2>ALL Types of Charts</h2>    
      <BarChart />
      <ChartContainer />
      <LineChart />
      <PieChart />
      <DoughnutChart />
      <PolarAreaChart />
      <RadarDatasetChart />
    </>
  )
}

export default App
