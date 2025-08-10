import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Component/BookingModal/BookingModal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  CalendarDays, 
  Users, 
  Mountain, 
  MapPin, 
  Clock, 
  Star,
  CheckCircle,
  XCircle,
  User
} from 'lucide-react';

const PackageDetail = () => {
  const packageData = useLoaderData();
  
  if (!packageData) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header with image and basic info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={ 'https://i.ibb.co.com/jvCYYLGg/a7d71765-f25a-43cc-bb2d-2f114943.jpg'}
              alt={packageData.title}
              className="w-full h-[400px] object-cover"
            />
            {packageData.featured && (
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1" /> Featured
              </div>
            )}
          </div>
        </div>
        
        {/* Package Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {packageData.category}
              </span>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                packageData.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                packageData.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {packageData.difficulty}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{packageData.title}</h1>
            <p className="text-gray-600 mt-3 text-lg">{packageData.description}</p>
          </div>
          
          <div className="flex items-baseline">
            <div className="text-3xl font-bold text-orange-500">
              ${packageData.price}
              <span className="text-base text-gray-500 font-normal ml-1">/ per person</span>
            </div>
            {packageData.discount > 0 && (
              <div className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                Save {packageData.discount}%
              </div>
            )}
          </div>
          
          {/* Trip Info Grid */}
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="p-2 bg-orange-100 rounded-lg">
                <CalendarDays className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Departure</p>
                <p className="font-medium">{new Date(packageData.departureDate).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium">{packageData.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Group Size</p>
                <p className="font-medium">{packageData.groupSize} people</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium">{packageData.location}</p>
              </div>
            </div>
          </div>
          
          {/* Guide Info */}
         
          
          {/* Book Button */}
          <BookingModal packageData={packageData}>
            <Button size="lg" className="w-full py-3 text-lg font-medium">
              Book Now
            </Button>
          </BookingModal>
        </div>
      </div>
      
      {/* Additional Information Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Highlights */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-orange-500" /> Trip Highlights
          </h2>
          <ul className="space-y-3">
            {packageData.highlights?.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{highlight.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* What's Included */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-500" /> What's Included
          </h2>
          <ul className="space-y-3">
            {packageData.included?.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* What's Not Included */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <XCircle className="w-5 h-5 mr-2 text-red-500" /> What's Not Included
          </h2>
          <ul className="space-y-3">
             {packageData.notIncluded?.map((item, index) => (

               <li key={index} className="flex items-start">
                <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
           </ul>  
        </div>
      </div>
      
      {/* Itinerary */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CalendarDays className="w-6 h-6 mr-2 text-orange-500" /> Trip Itinerary
        </h2>
        <div className="space-y-6">
          {packageData.itinerary?.map((day, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {index < packageData.itinerary.length - 1 && (
                  <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                <p className="text-gray-600 mt-1">{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;