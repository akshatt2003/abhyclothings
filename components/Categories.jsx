import React, { useState, useEffect } from "react";

const CATS = [
  {
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200",
    label: "Sarees",
    sub: "2K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200",
    label: "Kurtas",
    sub: "5K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200",
    label: "Lehengas",
    sub: "1K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200",
    label: "Men Wear",
    sub: "3K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200",
    label: "Dresses",
    sub: "4K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200",
    label: "Jeans",
    sub: "2K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200",
    label: "Jackets",
    sub: "800+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1514091911024-4b4457784847?w=200",
    label: "Kids",
    sub: "3K+ styles",
  },
  {
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200",
    label: "Footwear",
    sub: "6K+ styles",
  },
];

export default function Categories() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{ ...styles.section, padding: isMobile ? "25px 0" : "40px 0" }}
    >
      <div style={styles.header}>
        <div>
          <h2 style={{ ...styles.title, fontSize: isMobile ? "15px" : "18px" }}>
            SHOP BY CATEGORY
          </h2>
          <div style={styles.underline}></div>
        </div>
        <a
          href="#"
          style={{ ...styles.viewAll, fontSize: isMobile ? "11px" : "13px" }}
        >
          VIEW ALL
        </a>
      </div>

      <div style={styles.scrollContainer} className="hide-scrollbar">
        {CATS.map((cat, idx) => (
          <CategoryItem key={idx} cat={cat} isMobile={isMobile} />
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
          -webkit-overflow-scrolling: touch; /* Smooth momentum scroll for iOS */
        }
      `}</style>
    </section>
  );
}

function CategoryItem({ cat, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  // Shrink items slightly on mobile to show more of the horizontal list
  const itemSize = isMobile ? "80px" : "110px";
  const imgSize = isMobile ? "65px" : "90px";

  return (
    <div
      style={{ ...styles.item, width: itemSize }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div
        style={{
          ...styles.imageWrapper,
          width: imgSize,
          height: imgSize,
          borderColor: isHovered ? "#ff3f6c" : "transparent",
          transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        }}
      >
        <img
          src={cat.img}
          alt={cat.label}
          style={{
            ...styles.image,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>
      <div style={styles.textContainer}>
        <span
          style={{
            ...styles.label,
            fontSize: isMobile ? "11px" : "13px",
            color: isHovered ? "#ff3f6c" : "#282c3f",
          }}
        >
          {cat.label}
        </span>
        <span
          style={{ ...styles.subText, fontSize: isMobile ? "9px" : "11px" }}
        >
          {cat.sub}
        </span>
      </div>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eaeaec",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4%",
    marginBottom: "20px",
  },
  title: {
    fontWeight: "800",
    color: "#282c3f",
    letterSpacing: "1px",
    margin: 0,
  },
  underline: {
    width: "30px",
    height: "3px",
    backgroundColor: "#ff3f6c",
    marginTop: "4px",
  },
  viewAll: {
    fontWeight: "700",
    color: "#ff3f6c",
    textDecoration: "none",
    letterSpacing: "0.5px",
  },
  scrollContainer: {
    display: "flex",
    overflowX: "auto",
    padding: "10px 4%",
    gap: "20px",
    scrollBehavior: "smooth",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    flexShrink: 0,
  },
  imageWrapper: {
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid transparent",
    padding: "2px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    transition: "transform 0.5s ease",
  },
  textContainer: {
    textAlign: "center",
    marginTop: "8px",
  },
  label: {
    display: "block",
    fontWeight: "700",
    letterSpacing: "0.3px",
    transition: "color 0.2s",
    whiteSpace: "nowrap",
  },
  subText: {
    display: "block",
    color: "#7e818c",
    marginTop: "1px",
    whiteSpace: "nowrap",
  },
};
