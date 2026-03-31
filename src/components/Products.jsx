import React, { useState } from "react";
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

function ProductCard({ product, onAddToCart }) {
  const [isWished, setIsWished] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styles.card}
    >
      {/* Image Container */}
      <div style={styles.imageWrapper}>
        <img src={product.img} alt={product.name} style={styles.image} />

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWished(!isWished)}
          style={styles.wishlistBtn}
        >
          <Heart
            size={20}
            fill={isWished ? "#ff3f6c" : "none"}
            stroke={isWished ? "#ff3f6c" : "#282c3f"}
          />
        </button>

        {/* Rating Badge (Hidden on hover like Myntra) */}
        {!isHovered && (
          <div style={styles.ratingBadge}>
            {product.rating} <Star size={12} fill="#14958f" stroke="none" />
            <span style={styles.separator}>|</span>
            {product.reviews > 1000
              ? (product.reviews / 1000).toFixed(1) + "k"
              : product.reviews}
          </div>
        )}

        {/* Hover Overlay - Add to Bag */}
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

        {product.tag && <div style={styles.tag}>{product.tag}</div>}
      </div>

      {/* Details Container */}
      <div style={styles.details}>
        <h3 style={styles.brand}>{product.brand}</h3>
        <p style={styles.name}>{product.name}</p>
        <div style={styles.priceContainer}>
          <span style={styles.price}>₹{product.price}</span>
          <span style={styles.mrp}>₹{product.mrp}</span>
          <span style={styles.discount}>({product.discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
}

export default function Products({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>TRENDING PRODUCTS</h2>
        <div style={styles.tabContainer}>
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
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "50px 4%", backgroundColor: "#fff" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#282c3f",
    letterSpacing: "1px",
  },
  tabContainer: { display: "flex", gap: "20px" },
  tab: {
    background: "none",
    border: "none",
    padding: "10px 0",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "14px",
    transition: "0.3s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "30px",
  },
  card: {
    position: "relative",
    transition: "all 0.3s ease",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "300px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  wishlistBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    zIndex: 10,
  },
  ratingBadge: {
    position: "absolute",
    bottom: "12px",
    left: "12px",
    background: "rgba(255,255,255,0.9)",
    padding: "4px 8px",
    borderRadius: "2px",
    fontSize: "12px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#282c3f",
  },
  separator: { color: "#d4d5d9", margin: "0 2px" },
  hoverOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease",
  },
  addToBagBtn: {
    width: "100%",
    height: "100%",
    border: "1px solid #d4d5d9",
    background: "#fff",
    color: "#282c3f",
    fontWeight: "700",
    fontSize: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  tag: {
    position: "absolute",
    top: "12px",
    left: 0,
    backgroundColor: "#ff3f6c",
    color: "#fff",
    fontSize: "10px",
    fontWeight: "800",
    padding: "4px 8px",
  },
  details: { padding: "12px 0" },
  brand: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#282c3f",
    margin: "0 0 4px 0",
  },
  name: {
    fontSize: "14px",
    color: "#535766",
    margin: "0 0 8px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  priceContainer: { display: "flex", alignItems: "center", gap: "8px" },
  price: { fontWeight: "800", fontSize: "14px", color: "#282c3f" },
  mrp: { textDecoration: "line-through", color: "#7e818c", fontSize: "12px" },
  discount: { color: "#ff905a", fontSize: "12px", fontWeight: "700" },
};
