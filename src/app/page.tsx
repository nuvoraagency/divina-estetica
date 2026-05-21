import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Experience from "@/components/Experience";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Treatments />
      <Experience />
      <Booking />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
