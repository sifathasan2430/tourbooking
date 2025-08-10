import { Button } from "@/components/ui/button";

const  AboutUs=()=> {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg max-w-2xl">
            Your trusted travel partner for unforgettable journeys around the world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Our Story"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Founded with a passion for exploration, our mission is to make travel simple, affordable, and memorable. 
            Over the years, we have helped thousands of travelers experience breathtaking destinations and immerse themselves in different cultures.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Whether you're looking for a relaxing beach getaway or an adventurous mountain trek, we are here to make it happen. 
            Our dedicated team works around the clock to ensure your trip is stress-free and unforgettable.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🌍 Expert Travel Guides</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced guides ensure you make the most out of every destination.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">💰 Best Price Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer competitive prices without compromising on quality.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🛡️ Safe & Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your safety is our top priority from booking to return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Happy Customers", value: "10K+" },
          { label: "Tours Completed", value: "500+" },
          { label: "Destinations", value: "50+" },
          { label: "Years Experience", value: "8+" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
            <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </section>

     
    </div>
  );
}
export default AboutUs;