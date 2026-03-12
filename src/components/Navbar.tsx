import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Packages", href: "#packages" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <img
              src="https://img.icons8.com/color/512/around-the-globe.png"
              alt="Maa Bhawani Travels Logo"
              className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-110 transition transform"
            />
            <span className={cn(
              "font-brand text-2xl font-bold tracking-wide",
              scrolled ? "text-primary" : "text-white drop-shadow-lg"
            )}>
              Maa Bhawani Travels
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "text-sm font-medium hover:text-secondary transition-colors relative group",
                  scrolled ? "text-foreground" : "text-white/90 drop-shadow-md"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-5 py-2.5 rounded-full bg-primary/90 hover:bg-primary text-white text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={cn("w-6 h-6", scrolled ? "text-foreground" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", scrolled ? "text-foreground" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
