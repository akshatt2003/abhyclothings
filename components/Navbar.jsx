import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <span>
          FLAT ₹400 OFF on your first order. Use Code: <b>WELCOME400</b>
        </span>
      </div>

      <nav style={styles.navMain}>
        {/* Hamburger Menu (Mobile Only) */}
        {isMobile && (
          <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        )}

        {/* Logo Section */}
        <div style={styles.logoContainer}>
          <div style={styles.logoWrapper}>
            <img src={LogoIcon} alt="Logo" style={styles.logoImage} />
          </div>
        </div>

        {/* Categories (Desktop Only) */}
        {!isMobile && (
          <div style={styles.catContainer}>
            {NAV_CATS.map((cat) => (
              <div
                key={cat.name}
                style={{ ...styles.catItem, color: cat.color }}
              >
                {cat.name}
              </div>
            ))}
          </div>
        )}

        {/* Search Bar (Adapts to Mobile) */}
        {(!isMobile || showMobileSearch) && (
          <div
            style={{
              ...styles.searchWrapper,
              ...(isMobile ? styles.mobileSearchOverlay : {}),
              backgroundColor: isFocused ? "#fff" : "#f5f5f6",
              border: isFocused ? "1px solid #d4d5d9" : "1px solid transparent",
            }}
          >
            <Search size={18} color="#696b79" style={{ marginLeft: 12 }} />
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                if (isMobile) setShowMobileSearch(false);
              }}
              autoFocus={isMobile}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              style={styles.searchInput}
            />
          </div>
        )}

        {/* Action Icons */}
        <div style={styles.actions}>
          {isMobile && (
            <div
              style={styles.actionBtn}
              onClick={() => setShowMobileSearch(true)}
            >
              <Search size={22} />
            </div>
          )}

          {!isMobile && (
            <div style={styles.actionBtn}>
              <User size={20} />
              <span style={styles.actionText}>Profile</span>
            </div>
          )}

          <div style={styles.actionBtn}>
            <Heart size={isMobile ? 22 : 20} />
            {!isMobile && <span style={styles.actionText}>Wishlist</span>}
          </div>

          <div style={styles.actionBtn} onClick={onCartOpen}>
            <div style={{ position: "relative" }}>
              <ShoppingBag size={isMobile ? 22 : 20} />
              {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
            </div>
            {!isMobile && <span style={styles.actionText}>Bag</span>}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobile && menuOpen && (
        <>
          <div
            style={styles.drawerOverlay}
            onClick={() => setMenuOpen(false)}
          />
          <div style={styles.drawer}>
            <div style={styles.drawerHeader}>
              <strong>SHOP FOR</strong>
              <X size={20} onClick={() => setMenuOpen(false)} />
            </div>
            {NAV_CATS.map((cat) => (
              <div key={cat.name} style={styles.drawerItem}>
                {cat.name}
              </div>
            ))}
          </div>
        </>
      )}
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
    fontSize: "10px",
    padding: "6px 10px",
    textAlign: "center",
  },
  navMain: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    padding: "0 4%",
    maxWidth: "1600px",
    margin: "0 auto",
    justifyContent: "space-between",
  },
  menuIcon: {
    marginRight: "15px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  logoWrapper: {
    width: "45px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  logoImage: {
    height: "80px",
    width: "auto",
    transform: "scale(2.0)",
    objectFit: "contain",
  },
  catContainer: {
    display: "flex",
    gap: "20px",
    marginLeft: "30px",
  },
  catItem: {
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  searchWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    height: "38px",
    margin: "0 20px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
  },
  mobileSearchOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "70px",
    zIndex: 1100,
    margin: 0,
    borderRadius: 0,
    backgroundColor: "#fff",
    padding: "0 15px",
  },
  searchInput: {
    width: "100%",
    border: "none",
    background: "transparent",
    outline: "none",
    padding: "0 12px",
    fontSize: "14px",
  },
  actions: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },
  actionBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  actionText: {
    fontSize: "11px",
    fontWeight: "700",
    marginTop: "2px",
  },
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    background: "#ff3f6c",
    color: "#fff",
    fontSize: "9px",
    padding: "1px 5px",
    borderRadius: "10px",
  },
  /* Drawer Styles */
  drawerOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 1050,
  },
  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "280px",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 1060,
    boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
    padding: "20px",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #f5f5f6",
    paddingBottom: "10px",
  },
  drawerItem: {
    padding: "15px 0",
    fontSize: "14px",
    fontWeight: "700",
    borderBottom: "1px solid #f5f5f6",
    color: "#282c3f",
  },
};
