import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Goa",
    description: "Sun, sand, and vibrant nightlife",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Kerala",
    description: "God's own country backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 row-span-1",
  },
  {
    name: "Rajasthan",
    description: "Land of majestic palaces",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 row-span-1",
  },
  {
    name: "Manali",
    description: "Snow-capped mountain adventures",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 row-span-1",
  },
  {
    name: "Andaman",
    description: "Crystal clear pristine beaches",
    image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cad160?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2 row-span-1",
  },
  {
    name: "Kashmir",
    description: "Paradise on earth",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1000&auto=format&fit=crop",
    colSpan: "col-span-1 row-span-1",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-background relative">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-bg.png)`, backgroundSize: '400px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Explore The World
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground"
          >
            Breathtaking Destinations
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${dest.colSpan}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <h4 className="text-2xl font-display font-bold text-white">{dest.name}</h4>
                </div>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
