import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  RotateCcw,
  CreditCard,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const SLIDES = [
  {
    id: 1,
    bg: "#f4e5d8",
    accent: "#ff3f6c",
    badge: "FESTIVAL SPECIAL",
    title: "THE ETHNIC EDIT",
    subtitle: "UP TO 70% OFF",
    desc: "Premium Sarees, Kurtas & Wedding Wear",
    cta: "SHOP NOW",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    bg: "#d1e2e9",
    accent: "#282c3f",
    badge: "NEW ARRIVALS",
    title: "MODERN CLASSICS",
    subtitle: "STARTING ₹499",
    desc: "Sharp Formals & Trendy Casuals for Men",
    cta: "EXPLORE",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    bg: "#e9d1e1",
    accent: "#ff9500",
    badge: "TRENDING NOW",
    title: "WESTERN VIBES",
    subtitle: "FLAT 50% OFF",
    desc: "Dresses, Tops & Denim Essentials",
    cta: "VIEW ALL",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800",
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", overflow: "hidden" }}>
      {/* Main Hero Section */}
      <div
        style={{
          position: "relative",
          height: "520px",
          backgroundColor: slide.bg,
          transition: "background-color 0.8s ease",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
        }}
      >
        {/* Animated Text Content */}
        <div style={{ flex: 1, zIndex: 2, maxWidth: "600px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <span
                style={{
                  color: slide.accent,
                  fontWeight: 800,
                  letterSpacing: "3px",
                  fontSize: "13px",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                {slide.badge}
              </span>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 900,
                  color: "#282c3f",
                  margin: "0 0 10px 0",
                  lineHeight: 1,
                }}
              >
                {slide.title}
              </h1>

              <h2
                style={{
                  fontSize: "24px",
                  color: "#535766",
                  marginBottom: "20px",
                  fontWeight: 400,
                }}
              >
                {slide.subtitle}
              </h2>

              <p
                style={{
                  color: "#7e818c",
                  marginBottom: "35px",
                  fontSize: "18px",
                }}
              >
                {slide.desc}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "16px 40px",
                  backgroundColor: "#282c3f",
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                {slide.cta} <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Image Content */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={slide.img}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              style={{
                height: "90%",
                objectFit: "contain",
                filter: "drop-shadow(20px 10px 30px rgba(0,0,0,0.15))",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Progress Navigation Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "8%",
            display: "flex",
            gap: "12px",
          }}
        >
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "40px" : "10px",
                height: "6px",
                backgroundColor: i === active ? "#282c3f" : "rgba(0,0,0,0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Feature Strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          padding: "30px 8%",
          background: "#fff",
          borderBottom: "1px solid #f5f5f6",
        }}
      >
        <FeatureItem
          icon={<Truck size={24} color="#ff3f6c" />}
          title="Free Shipping"
          desc="On orders above ₹799"
        />
        <FeatureItem
          icon={<RotateCcw size={24} color="#ff3f6c" />}
          title="Easy Returns"
          desc="30-day return policy"
        />
        <FeatureItem
          icon={<CreditCard size={24} color="#ff3f6c" />}
          title="Secure Pay"
          desc="UPI & COD available"
        />
        <FeatureItem
          icon={<ShieldCheck size={24} color="#ff3f6c" />}
          title="100% Original"
          desc="Direct from brands"
        />
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#fff1f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <h4
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: 700,
            color: "#282c3f",
          }}
        >
          {title}
        </h4>
        <p style={{ margin: 0, fontSize: "12px", color: "#7e818c" }}>{desc}</p>
      </div>
    </div>
  );
}
