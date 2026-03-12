import { motion } from "framer-motion";
import { Clock, Users, Star, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

const packages = [
  {
    id: "pkg-goa",
    name: "Weekend Goa Getaway",
    duration: "3 Days, 2 Nights",
    price: 1499,
    originalPrice: null,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pkg-kerala",
    name: "Kerala Backwaters Day Trip",
    duration: "1 Day, 0 Nights",
    price: 1299,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pkg-raj",
    name: "Rajasthan Heritage Tour",
    duration: "2 Days, 1 Night",
    price: 1899,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pkg-manali",
    name: "Manali Snow Adventure",
    duration: "3 Days, 2 Nights",
    price: 1599,
    originalPrice: 1800,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "pkg-andaman",
    name: "Andaman Beach Package",
    duration: "2 Days, 1 Night",
    price: 1799,
    originalPrice: null,
    rating: 4.9,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pkg-kashmir",
    name: "Kashmir Valley Tour",
    duration: "3 Days, 2 Nights",
    price: 1899,
    originalPrice: 1999,
    rating: 5.0,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Packages() {
  const handleBookClick = (pkgName: string, price: number) => {
    const message = `Hello Maa Bhawani Travels! I am interested in booking the *${pkgName}* package priced at ₹${price}/person.\nPlease share more details and availability!`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <section id="packages" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2"
            >
              Featured Tours
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground max-w-2xl"
            >
              Unbeatable Premium Packages
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md md:text-right"
          >
            Experience luxury without breaking the bank. Our highly curated packages guarantee memories of a lifetime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  {pkg.rating} <span className="text-muted-foreground font-normal">({pkg.reviews})</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-display font-bold text-foreground leading-tight">
                    {pkg.name}
                  </h4>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Per Person</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Starting from</span>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-primary">₹{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through mb-1">₹{pkg.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookClick(pkg.name, pkg.price)}
                    className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group/btn"
                    title="Book on WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
