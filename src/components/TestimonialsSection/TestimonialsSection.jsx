// in Home or TestimonialSection.jsx

import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";


const reviews = [
  {
    name: "Ayesha Siddiqua",
    location: "Dhaka, Bangladesh",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 5,
    message: "The Poon Hill Trek was a life-changing experience! Everything was perfectly organized. Highly recommend!",
  },
  {
    name: "Liam Anderson",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 4,
    message: "Breathtaking sunrise views and a very friendly guide. Would definitely travel again with this tour group.",
  },
  {
    name: "Sara Khan",
    location: "Lahore, Pakistan",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    message: "Amazing coordination, easy booking, and an unforgettable trip. Highly professional and welcoming.",
  },
  {
    name: "John Doe",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 4,
    message: "Perfect for short trekking! The group size was ideal, and the guide was super helpful and fun.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="container mx-auto  p-4   py-12  dark:bg-[#121212]">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-amber-600 mb-16 dark:text-white">What Our Travelers Say</h2>
        
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, idx) => (
          <TestimonialsCard key={idx} review={review} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;