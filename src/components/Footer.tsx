import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/color/512/around-the-globe.png"
                alt="Maa Bhawani Travels Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-brand text-2xl font-bold text-white tracking-wide">
                Maa Bhawani Travels
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Crafting premium travel experiences and unforgettable journeys across the most breathtaking destinations in India.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-secondary transition-colors text-sm">Home</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors text-sm">Destinations</a></li>
              <li><a href="#packages" className="hover:text-secondary transition-colors text-sm">Tour Packages</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors text-sm">Our Services</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">H.NO.177, Karthik Nagar, Kharangajhar, Telco Colony, Jamshedpur, Jharkhand 831004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">+91 62020 09554</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">bookings@maabhawanitravels.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Maa Bhawani Travels. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision for luxury.</p>
        </div>
      </div>
    </footer>
  );
}
