import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Activity, ArrowUp, ArrowDown, Clock, DollarSign, Home } from "lucide-react"
import ListingsTable from "../../../Components/Listtingtable/ListtingsTable"




export default function DashboardOverview() {
  const recentBookings = [
    {
      id: "685e5dd49e71483a1e1eee54",
      name: "Sifat Hasan",
      date: "2025-06-27",
      status: "pending",
      apartment: "Private Room in Atlanta"
    },
    {
      id: "685e5dd49e71483a1e1eee55",
      name: "Alex Johnson",
      date: "2025-06-28",
      status: "confirmed",
      apartment: "Luxury Downtown Apartment"
    },
    {
      id: "685e5dd49e71483a1e1eee56",
      name: "Maria Garcia",
      date: "2025-06-29",
      status: "cancelled",
      apartment: "Cozy Studio Near Campus"
    },
  ]

  return (
    <dv className="flex min-h-screen">
    
      
      <div className="flex-1  p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">12%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Rentals</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">5%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500">2</span> from yesterday
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$23,400</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">18%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Listings Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Listings</CardTitle>
          </CardHeader>
          <CardContent>
          <ListingsTable />
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{booking.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.apartment}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {booking.date}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}