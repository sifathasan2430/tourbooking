import { Link } from "react-router-dom";

const tourData = [
  {
    id: 1,
    category: "Cultural Adventure",
    description: "Immerse in local traditions and heritage.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  },
  {
    id: 2,
    category: "Adventure Trips",
    description: "Thrilling activities in breathtaking landscapes.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
  },
  {
    id: 3,
    category: "Short Treks",
    description: "Gentle trails and majestic views for all ages.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
];

const CategoryCard = () => {
  return (
    <section className="container mx-auto px-4   py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#e17100] mb-16">
        Explore Experiences
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tourData.map((tour) => (
          <Link
            to={`/category/${tour.id}`}
            key={tour.id}
            className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={tour.image}
              alt={tour.category}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

         
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors duration-300" />

           
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
              <h3 className="text-lg sm:text-xl font-semibold">
                {tour.category}
              </h3>
              <p className="text-sm text-white/80 line-clamp-2">
                {tour.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryCard;
