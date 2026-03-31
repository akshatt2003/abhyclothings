import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export const PRODUCTS = [
  // --- WOMEN ---
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
    img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1602762682747-4c5d1e6e0e69?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1610189352649-6b374b19dcee?w=500&fit=crop",
  },
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
    img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&fit=crop",
  },
  {
    id: 17,
    name: "Cotton Printed Palazzo Pants",
    brand: "Aurelia",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.2,
    reviews: 3200,
    tag: null,
    category: "Women",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&fit=crop",
  },
  {
    id: 18,
    name: "Floral Wrap Midi Dress",
    brand: "Global Desi",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.4,
    reviews: 1540,
    tag: "NEW ARRIVAL",
    category: "Women",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&fit=crop",
  },
  {
    id: 19,
    name: "Chanderi Silk Dupatta",
    brand: "Fabindia",
    price: 349,
    mrp: 799,
    discount: 56,
    rating: 4.5,
    reviews: 980,
    tag: null,
    category: "Women",
    img: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=500&fit=crop",
  },
  {
    id: 20,
    name: "Women's Gold Jhumka Earrings",
    brand: "Tanishq",
    price: 2499,
    mrp: 3999,
    discount: 37,
    rating: 4.7,
    reviews: 760,
    tag: "PREMIUM",
    category: "Women",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&fit=crop",
  },

  // --- MEN ---
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
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=500&fit=crop",
  },
  {
    id: 21,
    name: "Men's Slim Fit Chinos",
    brand: "Van Heusen",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.3,
    reviews: 2100,
    tag: null,
    category: "Men",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4571?w=500&fit=crop",
  },
  {
    id: 22,
    name: "Men Printed Casual Shirt",
    brand: "Killer",
    price: 449,
    mrp: 999,
    discount: 55,
    rating: 4.1,
    reviews: 3400,
    tag: "BESTSELLER",
    category: "Men",
    img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&fit=crop",
  },
  {
    id: 23,
    name: "Men's Ethnic Nehru Jacket",
    brand: "Manyavar",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.6,
    reviews: 870,
    tag: "TRENDING",
    category: "Men",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&fit=crop",
  },
  {
    id: 24,
    name: "Leather Strap Analog Watch",
    brand: "Fossil",
    price: 5999,
    mrp: 9999,
    discount: 40,
    rating: 4.7,
    reviews: 6700,
    tag: "PREMIUM",
    category: "Men",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&fit=crop",
  },

  // --- KIDS ---
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
    img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&fit=crop",
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
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&fit=crop",
  },
  {
    id: 25,
    name: "Boys Denim Jacket",
    brand: "H&M Kids",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.5,
    reviews: 430,
    tag: "NEW ARRIVAL",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=500&fit=crop",
  },
  {
    id: 26,
    name: "Girls Embroidered Lehenga",
    brand: "Biba Girls",
    price: 1199,
    mrp: 2499,
    discount: 52,
    rating: 4.6,
    reviews: 320,
    tag: "TRENDING",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=500&fit=crop",
  },
  {
    id: 27,
    name: "Kids Casual Sneakers",
    brand: "Puma Kids",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.4,
    reviews: 780,
    tag: "BESTSELLER",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&fit=crop",
  },

  // --- HOME & LIVING ---
  {
    id: 28,
    name: "Handblock Printed Bedsheet Set",
    brand: "Fabindia",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.5,
    reviews: 3200,
    tag: "BESTSELLER",
    category: "Home",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&fit=crop",
  },
  {
    id: 29,
    name: "Ceramic Dinner Set (12 pcs)",
    brand: "Corelle",
    price: 1999,
    mrp: 3999,
    discount: 50,
    rating: 4.6,
    reviews: 1540,
    tag: "HOT DEAL",
    category: "Home",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&fit=crop",
  },
  {
    id: 30,
    name: "Decorative Brass Diya Set",
    brand: "Craftsvilla",
    price: 349,
    mrp: 699,
    discount: 50,
    rating: 4.3,
    reviews: 890,
    tag: "FESTIVE",
    category: "Home",
    img: "https://images.unsplash.com/photo-1574263945572-d5aa1e2de56d?w=500&fit=crop",
  },
  {
    id: 31,
    name: "Handwoven Cotton Cushion Covers",
    brand: "Ekibeki",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.4,
    reviews: 670,
    tag: null,
    category: "Home",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&fit=crop",
  },
  {
    id: 32,
    name: "Stainless Steel Casserole Set",
    brand: "Prestige",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.2,
    reviews: 2100,
    tag: "KITCHEN ESSENTIAL",
    category: "Home",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&fit=crop",
  },
  {
    id: 33,
    name: "Aromatic Soy Wax Candle Set",
    brand: "The Body Shop",
    price: 699,
    mrp: 1299,
    discount: 46,
    rating: 4.7,
    reviews: 450,
    tag: "TRENDING",
    category: "Home",
    img: "https://images.unsplash.com/photo-1603905756955-f34f4e38d9b6?w=500&fit=crop",
  },

  // --- BEAUTY ---
  {
    id: 34,
    name: "Vitamin C Brightening Serum",
    brand: "Mamaearth",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.5,
    reviews: 8900,
    tag: "BESTSELLER",
    category: "Beauty",
    img: "https://images.unsplash.com/photo-1570194065650-d99fb4b38e80?w=500&fit=crop",
  },
  {
    id: 35,
    name: "Matte Finish Lipstick Set",
    brand: "Lakme",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.3,
    reviews: 5600,
    tag: "HOT DEAL",
    category: "Beauty",
    img: "https://images.unsplash.com/photo-1586495777744-4e6232bf5a22?w=500&fit=crop",
  },
  {
    id: 36,
    name: "Charcoal Face Wash 100ml",
    brand: "Himalaya",
    price: 149,
    mrp: 299,
    discount: 50,
    rating: 4.4,
    reviews: 12300,
    tag: null,
    category: "Beauty",
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&fit=crop",
  },
  {
    id: 37,
    name: "Rose Gold Makeup Brush Set",
    brand: "Sigma Beauty",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.6,
    reviews: 3400,
    tag: "PREMIUM",
    category: "Beauty",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&fit=crop",
  },
  {
    id: 38,
    name: "Argan Oil Hair Serum 50ml",
    brand: "L'Oreal",
    price: 349,
    mrp: 699,
    discount: 50,
    rating: 4.5,
    reviews: 7800,
    tag: "TOP RATED",
    category: "Beauty",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&fit=crop",
  },
  {
    id: 39,
    name: "Hydrating Sheet Mask Pack",
    brand: "Plum",
    price: 299,
    mrp: 599,
    discount: 50,
    rating: 4.4,
    reviews: 4200,
    tag: "TRENDING",
    category: "Beauty",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&fit=crop",
  },
];

const TABS = ["All", "Women", "Men", "Kids", "Home", "Beauty", "Sale"];
const INITIAL_COUNT = 8;

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img
          src={product.img}
          alt={product.name}
          style={styles.image}
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&fit=crop";
          }}
        />
        <div style={styles.ratingBadge}>
          {product.rating} <Star size={10} fill="#14958f" stroke="none" />
          <span style={styles.separator}>|</span>
          {product.reviews > 1000
            ? (product.reviews / 1000).toFixed(1) + "k"
            : product.reviews}
        </div>
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
      </div>
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for tab change events fired by Navbar
  useEffect(() => {
    const handler = (e) => {
      setActiveTab(e.detail);
      setVisibleCount(INITIAL_COUNT); // reset on nav click
    };
    window.addEventListener("setProductTab", handler);
    return () => window.removeEventListener("setProductTab", handler);
  }, []);

  // Reset visible count when tab changes manually
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_COUNT);
  };

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      activeTab === "All" ||
      p.category === activeTab ||
      (activeTab === "Sale" && p.discount > 50),
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section
      style={{ ...styles.section, padding: isMobile ? "30px 15px" : "50px 4%" }}
    >
      {/* Header */}
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
              onClick={() => handleTabChange(tab)}
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

      {/* Product Grid */}
      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : "repeat(auto-fill, minmax(220px, 1fr))",
        }}
      >
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* View More / View Less */}
      {filteredProducts.length > INITIAL_COUNT && (
        <div style={styles.viewMoreContainer}>
          {hasMore ? (
            <button
              style={styles.viewMoreBtn}
              onClick={() => setVisibleCount((c) => c + 8)}
            >
              VIEW MORE ({filteredProducts.length - visibleCount} more)
            </button>
          ) : (
            <button
              style={styles.viewLessBtn}
              onClick={() => {
                setVisibleCount(INITIAL_COUNT);
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              VIEW LESS
            </button>
          )}
        </div>
      )}

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
    gap: "15px",
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "3/4",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
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
  viewMoreContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  viewMoreBtn: {
    padding: "12px 40px",
    border: "2px solid #282c3f",
    background: "transparent",
    color: "#282c3f",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  viewLessBtn: {
    padding: "12px 40px",
    border: "2px solid #d4d5d9",
    background: "transparent",
    color: "#7e818c",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    cursor: "pointer",
  },
};
