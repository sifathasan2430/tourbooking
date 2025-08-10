import { MapPin, Clock, DollarSign } from "lucide-react";
import { useNavigate } from "react-router";

const FeaturedCard = ({ tour }) => {
  const {
    title,
    location,
    duration,
    price,
    discount,
    featured,
    image,
  } = tour;
console.log(tour)
  const finalPrice = price - discount;
 const navigate=useNavigate()
  return (
   
    <div className="relative rounded-2xl bg-white dark:bg-[#1f1f1f] shadow-sm hover:shadow-lg transition-all overflow-hidden border dark:border-gray-800">
      {/* Image */}
      <div className="relative h-56 w-full">
        <img
          src={'https://i.ibb.co.com/jvCYYLGg/a7d71765-f25a-43cc-bb2d-2f114943.jpg'}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
            Featured
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 gap-2">
          <MapPin className="w-4 h-4" /> {location}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-400">
        

          <p className="text-amber-600 font-semibold flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {finalPrice}
            {discount > 0 && (
              <span className="line-through text-xs text-gray-400 ml-1">
                ${price}
              </span>
            )}
          </p>
        </div>

        <div className="pt-3">
          <button onClick={()=> navigate(`/package/${tour._id}`)} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-md transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
