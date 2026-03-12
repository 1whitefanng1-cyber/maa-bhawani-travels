import { motion } from "framer-motion";
import { Compass, Hotel, Plane, Headphones } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Custom Tours",
    description: "Tailor-made itineraries designed specifically around your preferences and travel style.",
  },
  {
    icon: Hotel,
    title: "Luxury Stays",
    description: "Exclusive partnerships with premium resorts and boutique hotels worldwide.",
  },
  {
    icon: Plane,
    title: "Flight Assistance",
    description: "Seamless booking and premium upgrades for a comfortable journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock dedicated concierge service throughout your entire trip.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -right-64 -top-64 w-[500px] h-[500px] rounded-full bg-teal-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            What We Offer
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Premium Travel Services
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-primary-foreground/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
