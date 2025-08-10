


import FeaturedSection from '../Component/FeaturedSection/FeaturedSection';
import Footer from '../Component/Footer/Footer';

import Gallery from '../Component/Gallery';
import HeroBanner from '../Component/HeroBanner/HeroBanner';
import Banner from '../Component/HeroBanner/HeroBanner';

import CategoryCard from '../components/Category/CategoryCard';
import PaymentLogosSwiper from '../components/PaymentSwiperLogo/PaymentLogosSwiper';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';


const Home = () => {
    const faqs = [
  {
    question: "What is included in a tour package?",
    answer:
      "Our tour packages typically include accommodation, guided tours, transportation, and some meals. Specific inclusions may vary by package — check the details before booking."
  },
  {
    question: "How can I book a tour package?",
    answer:
      "To book a package, simply log in, browse the available tours, and click the 'Book Now' button on your selected package. You'll receive confirmation once the booking is successful."
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, you can cancel or reschedule your booking based on the package provider's policy. Visit your 'My Bookings' page to manage your reservations."
  },
  {
    question: "Is online payment available for tour bookings?",
    answer:
      "Currently, our platform supports booking requests only. Payment is handled directly by the tour operator or at the time of travel (future versions will support online payments)."
  },
  {
    question: "How do I contact the tour package provider?",
    answer:
      "Each package detail page includes contact info for the provider. You can use that to reach out directly for any specific inquiries or customizations."
  }
];
    
  
   
   
  
    return (
        <div>
          <HeroBanner/>
            <CategoryCard/>
            <FeaturedSection/>
            <TestimonialsSection/>
            <PaymentLogosSwiper/>
            

         
           
           </div>
       
    );
};

export default Home;