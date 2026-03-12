import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#packages");
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Tropical Resort"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
        >
          <MapPin className="w-4 h-4 text-secondary" />
          <span>Discover the extraordinary</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-brand font-bold text-white leading-tight mb-6 drop-shadow-lg"
        >
          Maa Bhawani <br />
          <span className="text-secondary italic">Travels</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 drop-shadow-md font-light"
        >
          Experience luxury travel curated perfectly for you. Explore exotic destinations, pristine
          beaches, and vibrant cultures with Maa Bhawani Travels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#packages"
            onClick={scrollToPackages}
            className="px-8 py-4 rounded-full bg-primary hover:bg-teal-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(23,129,140,0.4)] hover:shadow-[0_0_30px_rgba(23,129,140,0.6)] hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Explore Packages
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#destinations"
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-semibold transition-all w-full sm:w-auto justify-center flex"
          >
            View Destinations
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-white/80 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
