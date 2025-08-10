
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const BookingsChart=()=> {
  const data = {
    labels: ['Mountain Trek', 'Beach Vacation', 'City Tour', 'Desert Safari'],
    datasets: [
      {
        label: 'Bookings',
        data: [300, 200, 150, 100],
        backgroundColor: [
          '#f48c00',
          '#ffb74d',
          '#ffcc80',
          '#ffe0b2',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings per Package</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] flex justify-center items-center">
        <Pie data={data} />
      </CardContent>
    </Card>
  )
}
export default BookingsChart;