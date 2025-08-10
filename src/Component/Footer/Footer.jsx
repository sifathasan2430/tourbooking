import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border-t dark:border-gray-800">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Logo & About */}
        <div>
          <Link to="/" className="text-2xl font-bold text-[#e17100]">
            Tour<span className="text-black dark:text-white">Ease</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
            Your trusted partner for unforgettable trekking and travel adventures around the world.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#e17100] transition">Home</Link></li>
            <li><Link to="/allpackage" className="hover:text-[#e17100] transition">All Packages</Link></li>
            <li><Link to="/bookings" className="hover:text-[#e17100] transition">My Bookings</Link></li>
            <li><Link to="/aboutus" className="hover:text-[#e17100] transition">About Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-md font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +880 1234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@tourease.com
            </li>
          </ul>

          <div className="mt-6 flex gap-4 text-gray-500 dark:text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-[#e17100]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#e17100]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#e17100]">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} TourEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
