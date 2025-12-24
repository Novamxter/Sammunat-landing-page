import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
