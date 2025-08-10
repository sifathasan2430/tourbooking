import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    id: 1,
    name: "Switzerland",
    price: 1200,
    status: "Published",
  },
  {
    id: 2,
    name: "Paris",
    price: 800,
    status: "Draft",
  },
  {
    id: 3,
    name: "New York",
    price: 1500,
    status: "Published",
  },
];

export default function ManagePackages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Packages</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Package Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell>{pkg.name}</TableCell>
                <TableCell>${pkg.price}</TableCell>
                <TableCell>
                  <Badge variant={pkg.status === "Published" ? "default" : "secondary"}>
                    {pkg.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}