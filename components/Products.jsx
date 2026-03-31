import React, { useState, useEffect } from "react";
import { Heart, Star, ShoppingBag } from "lucide-react"; // Using Lucide for a premium feel

export const PRODUCTS = [
  // --- WOMEN'S ETHNIC ---
  {
    id: 1,
    name: "Bandhani Print Anarkali Kurta",
    brand: "Biba",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.3,
    reviews: 2841,
    tag: "BESTSELLER",
    category: "Women",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500",
  },
  {
    id: 2,
    name: "Embroidered Straight Kurta Set",
    brand: "W",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.5,
    reviews: 4120,
    tag: "TOP RATED",
    category: "Women",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
  },
  {
    id: 3,
    name: "Banglori Silk Saree with Blouse",
    brand: "Saree Mall",
    price: 549,
    mrp: 1499,
    discount: 63,
    rating: 4.1,
    reviews: 6732,
    tag: "HOT DEAL",
    category: "Women",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
  },
  {
    id: 7,
    name: "Ethnic Printed Lehenga Choli",
    brand: "Anouk",
    price: 1499,
    mrp: 3499,
    discount: 57,
    rating: 4.6,
    reviews: 2100,
    tag: "TRENDING",
    category: "Women",
    img: "https://images.unsplash.com/photo-1617146059254-d1b14776936d?w=500",
  },

  // --- MEN'S WEAR ---
  {
    id: 4,
    name: "Men's Pathani Kurta Pyjama",
    brand: "Manyavar",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.4,
    reviews: 3200,
    tag: "TRENDING",
    category: "Men",
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500",
  },
  {
    id: 6,
    name: "Cotton Slim Fit Formal Shirt",
    brand: "Peter England",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.0,
    reviews: 5430,
    tag: null,
    category: "Men",
    img: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?w=500",
  },
  {
    id: 9,
    name: "Classic Navy Blue Polo T-shirt",
    brand: "Roadster",
    price: 399,
    mrp: 899,
    discount: 55,
    rating: 4.2,
    reviews: 8900,
    tag: "BEST VALUE",
    category: "Men",
    img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500",
  },
  {
    id: 10,
    name: "Men Relaxed Fit Cargo Pants",
    brand: "H&M",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.5,
    reviews: 1200,
    tag: "NEW ARRIVAL",
    category: "Men",
    img: "https://images.unsplash.com/photo-1624371414361-e6e8ea01c1e2?w=500",
  },

  // --- KIDS WEAR ---
  {
    id: 8,
    name: "Boys Kurta with Nehru Jacket",
    brand: "Fabindia",
    price: 449,
    mrp: 999,
    discount: 55,
    rating: 4.3,
    reviews: 980,
    tag: null,
    category: "Kids",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
  },
  {
    id: 11,
    name: "Girls Floral Party Dress",
    brand: "Nautinati",
    price: 899,
    mrp: 1899,
    discount: 52,
    rating: 4.7,
    reviews: 540,
    tag: "KIDS CHOICE",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1621454523226-c5f77daeba5a?w=500",
  },
  {
    id: 12,
    name: "Toddler Printed Cotton Set",
    brand: "Hopscotch",
    price: 599,
    mrp: 1299,
    discount: 54,
    rating: 4.4,
    reviews: 230,
    tag: null,
    category: "Kids",
    img: "https://images.unsplash.com/photo-1522771935876-2492c18e5c95?w=500",
  },

  // --- FOOTWEAR & ACCESSORIES ---
  {
    id: 13,
    name: "Women Pink Block Heels",
    brand: "Mochi",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.3,
    reviews: 1100,
    tag: null,
    category: "Women",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
  },
  {
    id: 14,
    name: "Men Tan Leather Formals",
    brand: "Bata",
    price: 1899,
    mrp: 3499,
    discount: 45,
    rating: 4.4,
    reviews: 4500,
    tag: "GENUINE LEATHER",
    category: "Men",
    img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500",
  },
  {
    id: 15,
    name: "Floral Print Canvas Tote Bag",
    brand: "Lavie",
    price: 699,
    mrp: 1499,
    discount: 53,
    rating: 4.6,
    reviews: 890,
    tag: "TRENDING",
    category: "Women",
    img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
  },
  {
    id: 16,
    name: "Matte Black Sunglasses",
    brand: "Ray-Ban",
    price: 4999,
    mrp: 7999,
    discount: 37,
    rating: 4.8,
    reviews: 12400,
    tag: "PREMIUM",
    category: "Men",
    img: "https://images.unsplash.com/photo-1511499767350-a1590fdb28bf?w=500",
  },
];

const TABS = ["All", "Women", "Men", "Kids", "Sale"];

function ProductCard({ product, onAddToCart, isMobile }) {
  const [isWished, setIsWished] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={styles.card}
    >
      <div style={styles.imageWrapper}>
        <img src={product.img} alt={product.name} style={styles.image} />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWished(!isWished);
          }}
          style={styles.wishlistBtn}
        >
          <Heart
            size={isMobile ? 18 : 20}
            fill={isWished ? "#ff3f6c" : "none"}
            stroke={isWished ? "#ff3f6c" : "#282c3f"}
          />
        </button>

        {/* Rating Badge: Persistent on mobile, hide on hover on desktop */}
        {(!isHovered || isMobile) && (
          <div style={styles.ratingBadge}>
            {product.rating} <Star size={10} fill="#14958f" stroke="none" />
            <span style={styles.separator}>|</span>
            {product.reviews > 1000
              ? (product.reviews / 1000).toFixed(1) + "k"
              : product.reviews}
          </div>
        )}

        {/* Hover Overlay: Only show on desktop hover. On mobile, we use a different approach or click-to-bag */}
        {!isMobile && (
          <div
            style={{
              ...styles.hoverOverlay,
              transform: isHovered ? "translateY(0)" : "translateY(100%)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <button
              onClick={() => onAddToCart(product)}
              style={styles.addToBagBtn}
            >
              <ShoppingBag size={18} /> ADD TO BAG
            </button>
          </div>
        )}

        {product.tag && <div style={styles.tag}>{product.tag}</div>}
      </div>

      <div style={styles.details}>
        <h3 style={styles.brand}>{product.brand}</h3>
        <p style={styles.name}>{product.name}</p>
        <div style={styles.priceContainer}>
          <span style={styles.price}>₹{product.price}</span>
          <span style={styles.mrp}>₹{product.mrp}</span>
          <span style={styles.discount}>{product.discount}% OFF</span>
        </div>

        {/* Mobile-only "Add to Bag" link/button since hover isn't possible */}
        {isMobile && (
          <button
            onClick={() => onAddToCart(product)}
            style={styles.mobileAddBtn}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
}

export default function Products({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter logic (example)
  const filteredProducts = PRODUCTS.filter(
    (p) =>
      activeTab === "All" ||
      p.category === activeTab ||
      (activeTab === "Sale" && p.discount > 50),
  );

  return (
    <section
      style={{ ...styles.section, padding: isMobile ? "30px 15px" : "50px 4%" }}
    >
      <div
        style={{
          ...styles.header,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "15px" : "0",
        }}
      >
        <h2
          style={{
            ...styles.sectionTitle,
            fontSize: isMobile ? "18px" : "24px",
          }}
        >
          {activeTab.toUpperCase()} PRODUCTS
        </h2>

        <div
          style={{
            ...styles.tabContainer,
            width: isMobile ? "100%" : "auto",
            overflowX: isMobile ? "auto" : "visible",
            paddingBottom: isMobile ? "5px" : "0",
          }}
          className="hide-scrollbar"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                color: activeTab === tab ? "#ff3f6c" : "#282c3f",
                borderBottom:
                  activeTab === tab
                    ? "2px solid #ff3f6c"
                    : "2px solid transparent",
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)" // 2 items per row on mobile
            : "repeat(auto-fill, minmax(220px, 1fr))",
        }}
      >
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={onAddToCart}
            isMobile={isMobile}
          />
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

const styles = {
  section: { backgroundColor: "#fff" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  sectionTitle: {
    fontWeight: "800",
    color: "#282c3f",
    letterSpacing: "1px",
    margin: 0,
  },
  tabContainer: {
    display: "flex",
    gap: "20px",
    whiteSpace: "nowrap",
  },
  tab: {
    background: "none",
    border: "none",
    padding: "8px 0",
    cursor: "pointer",
    fontWeight: "700",
    transition: "0.3s",
  },
  grid: {
    display: "grid",
    gap: "15px", // Tighter gap for mobile
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "3/4", // Maintains fashion photography proportions
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  wishlistBtn: {
    position: "absolute",
    top: "8px",
    right: "8px",
    background: "rgba(255,255,255,0.8)",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  ratingBadge: {
    position: "absolute",
    bottom: "8px",
    left: "8px",
    background: "rgba(255,255,255,0.9)",
    padding: "2px 6px",
    borderRadius: "20px",
    fontSize: "10px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "3px",
  },
  separator: { color: "#d4d5d9", margin: "0 2px" },
  hoverOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40px",
    backgroundColor: "#fff",
    display: "flex",
    zIndex: 5,
  },
  addToBagBtn: {
    width: "100%",
    border: "1px solid #d4d5d9",
    background: "#fff",
    fontWeight: "700",
    fontSize: "11px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  },
  mobileAddBtn: {
    marginTop: "8px",
    width: "100%",
    padding: "6px",
    backgroundColor: "transparent",
    border: "1px solid #ff3f6c",
    color: "#ff3f6c",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: "700",
  },
  tag: {
    position: "absolute",
    top: "10px",
    left: 0,
    backgroundColor: "#ff3f6c",
    color: "#fff",
    fontSize: "9px",
    fontWeight: "800",
    padding: "3px 6px",
  },
  details: { padding: "10px 0" },
  brand: {
    fontSize: "14px",
    fontWeight: "800",
    color: "#282c3f",
    margin: "0 0 2px 0",
  },
  name: {
    fontSize: "12px",
    color: "#535766",
    margin: "0 0 5px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    flexWrap: "wrap",
  },
  price: { fontWeight: "800", fontSize: "13px" },
  mrp: { textDecoration: "line-through", color: "#7e818c", fontSize: "11px" },
  discount: { color: "#ff905a", fontSize: "11px", fontWeight: "700" },
};
