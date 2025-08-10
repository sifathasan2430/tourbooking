import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import { useQuery } from '@tanstack/react-query';
import { FeaturedApi } from '../../api/customapi';
import Loader from '../Loader';





const FeaturedSection = () => {
    const navigate = useNavigate();
    const {data:tours,isLoading,isError}=useQuery({
      queryKey: ['featuredTours'],
      queryFn: ()=>FeaturedApi()
    })

    return (
       <section className="container mx-auto  px-4 py-12  dark:bg-[#121212]">
  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#e17100] mb-16">
      Explore Featured Tours
    </h2>
   
  </div>
{
  isLoading && <h1>loading</h1>
}
{
  isError && <h1 className='text-red-500 text-center'>Something went wrong</h1>
}
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    { tours && tours.map((tour) => (
      <FeaturedCard key={tour._id} tour={tour} />
    ))}
  </div>

  <div className="flex justify-center mt-16">
    <button
      onClick={() => navigate("/allpackage")}
      className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-shadow shadow-md hover:shadow-lg"
    >
      Show All Packages
    </button>
  </div>
</section>
    );
};

export default FeaturedSection;