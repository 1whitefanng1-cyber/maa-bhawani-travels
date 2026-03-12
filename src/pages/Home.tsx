import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Services />
      <Testimonials />
      <BookingForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
