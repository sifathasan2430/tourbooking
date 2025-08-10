import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const FeaturedTours=()=> {
  const featuredTours = [
    {
      id: 1,
      title: "Mountain Trek Adventure",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Beach Paradise Getaway",
      date: "July 10, 2023",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    },
    {
      id: 3,
      title: "Desert Safari Experience",
      date: "August 5, 2023",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <Star className="w-5 h-5 mr-2 fill-primary  text-primary" />
          Featured Tours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="border rounded-lg overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium">{tour.title}</h4>
                <p className="text-sm text-gray-500">{tour.date}</p>
                <div className="flex justify-end mt-4 space-x-2">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default FeaturedTours;