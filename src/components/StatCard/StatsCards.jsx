import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ticket, DollarSign, Box, Star } from "lucide-react"

const StatsCards=()=> {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,234",
      icon: Ticket,
      change: "+12% from last month",
    },
    {
      title: "Total Revenue",
      value: "$45,231",
      icon: DollarSign,
      change: "+19% from last month",
    },
    {
      title: "Total Packages",
      value: "32",
      icon: Box,
      change: "+4 since last month",
    },
    {
      title: "Featured Packages",
      value: "5",
      icon: Star,
      change: "2 currently promoted",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              {stat.title}
            </CardTitle>
            <stat.icon className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
export default StatsCards