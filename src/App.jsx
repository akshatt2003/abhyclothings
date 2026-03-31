import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
// import Categories from "./components/Categories";
import Products from "./components/Products";
import { OfferBanners, Testimonials, Newsletter } from "./components/Sections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section id="hero">
        <HeroBanner />
      </section>
      {/* <section id="categories">
        <Categories />
      </section> */}
      <section id="products">
        <Products />
      </section>
      <section id="offers">
        <OfferBanners />
      </section>
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
