// components/PaymentLogosSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import stripe from '../../assets/stripe.svg';

const paymentLogos = [
  {
    name: "Visa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  },
  {
    name: "MasterCard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    name: "Stripe",
    logo: stripe,
  },
  {
    name: "American Express",
    logo: "https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg",
  },
  {
    name: "Discover",
    logo: "https://cdn.jsdelivr.net/gh/sifathasan2430/assets@main/payments/discover.png",
  },
];

const PaymentLogosSwiper = () => {
  return (
    <div className="container mx-auto bg-white dark:bg-[#0f0f0f] py-16 px-4">
      
      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff8c00] mb-8">
        Trusted Payment Partners
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {paymentLogos.map((item, idx) => (
          <SwiperSlide key={idx} className="flex items-center justify-center">
            <img
              src={item.logo}
              alt={item.name}
              className="h-16 w-[150px] object-contain grayscale hover:grayscale-0 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PaymentLogosSwiper;
