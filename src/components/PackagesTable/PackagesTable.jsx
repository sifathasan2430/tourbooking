import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Star, MoreVertical } from "lucide-react"

const PackagesTable = () => {
  const packages = [
    {
      id: "PK001",
      title: "Mountain Trek Adventure",
      departureDate: "2023-06-20",
      duration: "7 days",
      price: 1200,
      guideName: "Alex Johnson",
      featured: true,
    },
    {
      id: "PK002",
      title: "Beach Paradise",
      departureDate: "2023-07-05",
      duration: "5 days",
      price: 1500,
      guideName: "Sarah Williams",
      featured: true,
    },
    {
      id: "PK003",
      title: "City Explorer",
      departureDate: "2023-08-12",
      duration: "3 days",
      price: 800,
      guideName: "Michael Brown",
      featured: false,
    },
  ]

  const handleUpdate = (id) => {
    console.log("Update", id)
    // Navigate to update form or open modal
  }

  const handleDelete = (id) => {
    console.log("Delete", id)
    // Show confirmation & delete logic
  }

  return (
    <div className="border rounded-lg">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Tour Packages</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Departure Date</TableHead>
            <TableHead className="text-center">Duration</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Guide</TableHead>
            <TableHead className="text-center">Featured</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((pkg) => (
            <TableRow key={pkg.id} className="text-center">
              <TableCell>{pkg.title}</TableCell>
              <TableCell>{pkg.departureDate}</TableCell>
              <TableCell>{pkg.duration}</TableCell>
              <TableCell>${pkg.price}</TableCell>
              <TableCell>{pkg.guideName}</TableCell>
              <TableCell>
                <div className="flex justify-center">
                  {pkg.featured ? (
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  ) : (
                    <Star className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleUpdate(pkg.id)}>
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(pkg.id)}
                      className="text-red-600"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PackagesTable
