import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// import RevenueChart from "./RevenueChart"
// import BookingsChart from "./BookingsChart"

import StatsCards from "../../../components/StatCard/StatsCards"
import PackagesTable from "../../../components/PackagesTable/PackagesTable"
import BookingTable from "../../../components/BookingTable/BookingTable"
import FeaturedTours from "../../../Component/Featured Tours/FeaturedTours"
import RevenueChart from "../../../Component/RevenueChart/RevenueChart"
import BookingsChart from "../../../Component/Bookings Chart/BookingsChart"

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tour Admin Dashboard</h1>
        <Button className="bg-primary hover:bg-primary/90">
          Add New Tour
        </Button>
      </div>

      <StatsCards/>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <RevenueChart/>
        <BookingsChart/>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <BookingTable/>
        <PackagesTable/>
      </div>

      <FeaturedTours />
    </div>
  )
}