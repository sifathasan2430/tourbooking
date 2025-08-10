import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

const BookingTable = () => {
  const [bookings, setBookings] = useState([
    {
      id: "BK001",
      tourTitle: "Mountain Trek Adventure",
      userName: "John Doe",
      userEmail: "john@example.com",
      bookingDate: "2023-05-15",
      departureDate: "2023-06-20",
      totalPrice: 1200,
      status: "Confirmed",
    },
    {
      id: "BK002",
      tourTitle: "Beach Paradise",
      userName: "Jane Smith",
      userEmail: "jane@example.com",
      bookingDate: "2023-05-18",
      departureDate: "2023-07-05",
      totalPrice: 1500,
      status: "Pending",
    },
    {
      id: "BK003",
      tourTitle: "City Explorer",
      userName: "Robert Johnson",
      userEmail: "robert@example.com",
      bookingDate: "2023-05-20",
      departureDate: "2023-08-12",
      totalPrice: 800,
      status: "Cancelled",
    },
  ])

  const handleStatusChange = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    )
    setBookings(updatedBookings)
  }

  return (
    <div className="border rounded-lg">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Recent Bookings</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="text-center">Booking ID</TableHead>
            <TableHead className="text-center">Tour Title</TableHead>
            <TableHead className="text-center">User</TableHead>
            <TableHead className="text-center">Booking Date</TableHead>
            <TableHead className="text-center">Departure Date</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id} className="text-center">
              <TableCell className="text-center">{booking.id}</TableCell>
              <TableCell className="text-center">{booking.tourTitle}</TableCell>
              <TableCell className="text-center">
                <div>{booking.userName}</div>
                <div className="text-sm text-gray-500">{booking.userEmail}</div>
              </TableCell>
              <TableCell className="text-center">{booking.bookingDate}</TableCell>
              <TableCell className="text-center">{booking.departureDate}</TableCell>
              <TableCell className="text-center">${booking.totalPrice}</TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={
                    booking.status === "Confirmed"
                      ? "default"
                      : booking.status === "Pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Select
                  defaultValue={booking.status}
                  onValueChange={(value) =>
                    handleStatusChange(booking.id, value)
                  }
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Confirmed">Confirmed</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default BookingTable
