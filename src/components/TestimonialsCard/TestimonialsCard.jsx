import { Star } from "lucide-react";

const TestimonialsCard = ({ review }) => {
  const { name, location, image, rating, message } = review;

  return (
    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm hover:shadow-md p-6 transition-all max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
            {name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">{location}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-amber-500" : "text-gray-300 dark:text-gray-600"
            }`}
            fill={index < rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      {/* Message */}
      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">{message}</p>
    </div>
  );
};

export default TestimonialsCard;