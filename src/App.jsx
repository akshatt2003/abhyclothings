import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { OfferBanners, Testimonials, Newsletter } from "./components/Sections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemove = (index) =>
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  const totalCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar cartCount={totalCount} onCartOpen={() => setCartOpen(true)} />
      <HeroBanner />
      <Categories />
      <Products onAddToCart={handleAddToCart} />
      <OfferBanners />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
      {cartOpen && (
        <CartSidebar
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
}
