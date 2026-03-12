import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = "Hi Maa Bhawani Travels! I'm interested in booking a trip. Can we chat?";
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-shadow group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Need help? Chat with us!
        <span className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-foreground"></span>
      </span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
    </motion.button>
  );
}
