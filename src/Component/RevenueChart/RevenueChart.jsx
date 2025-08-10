

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const RevenueChart=()=> {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue ($)',
        data: [4000, 3000, 6000, 4000, 8000, 7000, 9000],
        backgroundColor: '#f48c00',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <Bar options={options} data={data} />
      </CardContent>
    </Card>
  )
}
export default RevenueChart;