import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import LogoIcon from "../assets/logo.png";

const NAV_CATS = [
  { name: "MEN", color: "#282c3f" },
  { name: "WOMEN", color: "#282c3f" },
  { name: "KIDS", color: "#282c3f" },
  { name: "HOME & LIVING", color: "#282c3f" },
  { name: "BEAUTY", color: "#282c3f" },
  { name: "OFFERS", color: "#ff3f6c" },
];

export default function Navbar({ cartCount = 0, onCartOpen }) {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <span>
          FLAT ₹400 OFF on your first order. Use Code: <b>WELCOME400</b>
        </span>
      </div>

      <nav style={styles.navMain}>
        {/* Logo Section - Brand Name Removed */}
        <div style={styles.logoContainer}>
          <div style={styles.logoWrapper}>
            <img src={LogoIcon} alt="CA Logo" style={styles.logoImage} />
          </div>
        </div>

        {/* Categories */}
        <div style={styles.catContainer}>
          {NAV_CATS.map((cat) => (
            <div
              key={cat.name}
              style={{ ...styles.catItem, color: cat.color }}
              className="nav-hover"
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div
          style={{
            ...styles.searchWrapper,
            backgroundColor: isFocused ? "#fff" : "#f5f5f6",
            border: isFocused ? "1px solid #d4d5d9" : "1px solid transparent",
          }}
        >
          <Search size={18} color="#696b79" style={{ marginLeft: 12 }} />
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products, brands and more"
            style={styles.searchInput}
          />
        </div>

        {/* Action Icons */}
        <div style={styles.actions}>
          <div style={styles.actionBtn}>
            <User size={20} />
            <span style={styles.actionText}>Profile</span>
          </div>
          <div style={styles.actionBtn}>
            <Heart size={20} />
            <span style={styles.actionText}>Wishlist</span>
          </div>
          <div style={styles.actionBtn} onClick={onCartOpen}>
            <div style={{ position: "relative" }}>
              <ShoppingBag size={20} />
              {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
            </div>
            <span style={styles.actionText}>Bag</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,.05)",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  topBar: {
    background: "#282c3f",
    color: "#fff",
    fontSize: "12px",
    padding: "8px",
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: "0.5px",
  },
  navMain: {
    display: "flex",
    alignItems: "center",
    height: "85px",
    padding: "0 4%",
    maxWidth: "1600px",
    margin: "0 auto",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "50px", // Increased margin since text is gone
    cursor: "pointer",
  },
  logoWrapper: {
    width: "70px", // Slightly wider for a standalone icon
    height: "70px", // Slightly taller
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  logoImage: {
    height: "120px", // Increased height to make the "CA" icon physically larger
    width: "auto",
    transform: "scale(2.0)", // Increased zoom to focus on the icon only
    objectFit: "contain",
  },
  catContainer: {
    display: "flex",
    gap: "25px",
    height: "100%",
    alignItems: "center",
  },
  catItem: {
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    padding: "28px 0",
  },
  searchWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    height: "40px",
    margin: "0 40px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
  },
  searchInput: {
    width: "100%",
    border: "none",
    background: "transparent",
    outline: "none",
    padding: "0 12px",
    fontSize: "14px",
    color: "#696b79",
  },
  actions: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },
  actionBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    color: "#282c3f",
  },
  actionText: {
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "4px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    background: "#ff3f6c",
    color: "#fff",
    fontSize: "10px",
    fontWeight: "700",
    borderRadius: "50%",
    padding: "2px 6px",
  },
};
