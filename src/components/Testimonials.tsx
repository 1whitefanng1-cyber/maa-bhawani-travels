import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Honeymoon Traveler",
    text: "Our Kerala backwaters trip was nothing short of magical. Maa Bhawani Travels handled every detail flawlessly. The houseboat stay was pure luxury!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Rahul Verma",
    role: "Adventure Enthusiast",
    text: "The Manali snow package was an adrenaline rush packed with comfort. Great guides, excellent hotel choices, and seamless transfers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Anjali Desai",
    role: "Family Vacation",
    text: "Traveling with two kids is tough, but Maa Bhawani Travels made our Rajasthan trip effortless. The heritage hotels they picked were breathtaking.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Client Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground"
          >
            Memories We've Created
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/50" />

              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 italic relative z-10 leading-relaxed">
                "{test.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                />
                <div>
                  <h4 className="font-bold text-foreground">{test.name}</h4>
                  <span className="text-sm text-muted-foreground">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
