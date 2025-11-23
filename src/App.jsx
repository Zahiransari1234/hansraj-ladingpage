import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ChooseUs from "./components/chooseUs";
import ProductsSection from "./components/ProductSecrtion";
import GallerySection from "./components/GallerySection";

export default function App(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ChooseUs />
      <ProductsSection />
      <GallerySection />
      
    </div>
  );
}
