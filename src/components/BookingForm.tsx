import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, MapPin, Users, Phone, User, Send } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Goa Weekend Getaway",
    date: "",
    travelers: "2",
    requests: ""
  });

  const destinations = [
    "Weekend Goa Getaway",
    "Kerala Backwaters Day Trip",
    "Rajasthan Heritage Tour",
    "Manali Snow Adventure",
    "Andaman Beach Package",
    "Kashmir Valley Tour",
    "Custom Destination"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Booking Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Travel Date:* ${formData.date}\n` +
      `*Travelers:* ${formData.travelers}\n` +
      (formData.requests ? `*Special Requests:* ${formData.requests}\n\n` : `\n`) +
      `Looking forward to hearing from you!`;

    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2">
              Start Your Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Ready to create <br />unforgettable memories?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Fill out the form with your preferences, and we'll connect with you instantly on
              WhatsApp to finalize your perfect itinerary.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Direct WhatsApp Chat</h4>
                  <p className="text-sm text-muted-foreground">Fastest way to reach us</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">+91 62020 09554</h4>
                  <p className="text-sm text-muted-foreground">24/7 Support Helpline</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Select Destination/Package
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  {destinations.map(dest => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> Travel Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> Number of Travelers
                  </label>
                  <input
                    type="number"
                    name="travelers"
                    min="1"
                    required
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Special Requests (Optional)</label>
                <textarea
                  name="requests"
                  rows={3}
                  value={formData.requests}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Any dietary requirements, room preferences, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-lg transition-all shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Book via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
