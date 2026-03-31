import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "../assets/logo.png";

const NAV_CATS = [
  { name: "MEN", color: "#282c3f", tab: "Men" },
  { name: "WOMEN", color: "#282c3f", tab: "Women" },
  { name: "KIDS", color: "#282c3f", tab: "Kids" },
  { name: "HOME & LIVING", color: "#282c3f", tab: "Home" },
  { name: "BEAUTY", color: "#282c3f", tab: "Beauty" },
  { name: "OFFERS", color: "#ff3f6c", tab: "Sale" },
];

const handleNavClick = (tab, setMenuOpen) => {
  window.dispatchEvent(new CustomEvent("setProductTab", { detail: tab }));
  const el = document.getElementById("products");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  setMenuOpen(false);
};

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* <div style={styles.topBar}>
        <span>
          FLAT ₹400 OFF on your first order. Use Code: <b>WELCOME400</b>
        </span>
      </div> */}

      <nav style={styles.navMain}>
        {isMobile && (
          <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        )}

        <div
          style={styles.logoContainer}
          onClick={() => {
            const el = document.getElementById("hero");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div style={styles.logoWrapper}>
            <img src={LogoIcon} alt="Logo" style={styles.logoImage} />
          </div>
        </div>

        {!isMobile && (
          <div style={styles.catContainer}>
            {NAV_CATS.map((cat) => (
              <div
                key={cat.name}
                style={{ ...styles.catItem, color: cat.color }}
                onClick={() => handleNavClick(cat.tab, setMenuOpen)}
              >
                {cat.name}
              </div>
            ))}
          </div>
        )}
      </nav>

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
              <div
                key={cat.name}
                style={styles.drawerItem}
                onClick={() => handleNavClick(cat.tab, setMenuOpen)}
              >
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
    cursor: "pointer",
  },
};
