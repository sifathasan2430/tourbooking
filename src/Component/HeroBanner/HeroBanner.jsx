import React from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Full width background image */}
      <img
        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80"
        alt="Travel Adventure"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-7xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug max-w-3xl mx-auto">
            Explore Amazing <span className="text-[#e17100]">Tour Packages</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Discover your next adventure with curated tours, unforgettable experiences, and the best prices.
          </p>

          <button
            onClick={() => navigate("/allpackage")}
            className="mt-8 bg-[#e17100] hover:bg-[#cc6300] text-white font-semibold px-8 py-3 rounded-md transition"
          >
            Explore Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
