import React, { useState, useEffect } from "react";
import LogoIcon from "../assets/logo.png";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShopLink = (tab) => {
    window.dispatchEvent(new CustomEvent("setProductTab", { detail: tab }));
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const shopLinks = [
    { label: "Men", tab: "Men" },
    { label: "Women", tab: "Women" },
    { label: "Kids", tab: "Kids" },
    { label: "Home & Living", tab: "Home" },
    { label: "Beauty", tab: "Beauty" },
    { label: "Sale", tab: "Sale" },
  ];

  const socialLinks = [
    {
      label: "📘 Facebook",
      href: "https://www.facebook.com/share/1DqinGvxcq/",
    },
    {
      label: "📸 Instagram",
      href: "https://www.instagram.com/ashokkumar.bairwa.106?igsh=dGZ1Nmk2NHh3d3hm",
    },
    {
      label: "📸 Youtube",
      href: "https://www.youtube.com/@ashokgothwal6292",
    },
    {
      label: "🛒 Amazon",
      href: "https://amzn.in/d/0fniRNSb",
    },
  ];

  return (
    <footer
      style={{
        background: "#1a1a2e",
        color: "rgba(255,255,255,0.75)",
        padding: isMobile ? "40px 20px 24px" : "40px 32px 16px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
          gap: isMobile ? "32px" : "40px",
          marginBottom: 32,
        }}
      >
        {/* Brand col */}
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <div
            style={{
              ...logoStyles.wrapper,
              justifyContent: isMobile ? "center" : "flex-start",
              margin: isMobile ? "0 auto" : "0",
            }}
          >
            <img src={LogoIcon} alt="CA Logo" style={logoStyles.image} />
          </div>

          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 16,
              marginTop: 10,
              textTransform: "uppercase",
            }}
          >
            Style That Speaks
          </div>

          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              marginBottom: 16,
              color: "rgba(255,255,255,0.55)",
              maxWidth: isMobile ? "100%" : "350px",
            }}
          >
            Bringing the best of Indian & Western fashion to your doorstep.
            Trusted by customers across India.
          </p>

          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              marginBottom: 20,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Owner:{" "}
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>
              Ashok Kumar Bairwa
            </span>
            <br />
            📧 Bairwaashok96@gmail.com
            <br />
            📱 +91 82336 00439
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 18,
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={socialButtonStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#ff3f6c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Online Shopping col */}
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <h4 style={columnHeaderStyle}>ONLINE SHOPPING</h4>
          <ul style={{ ...listStyle, padding: 0 }}>
            {shopLinks.map((item) => (
              <li key={item.label}>
                <span
                  onClick={() => handleShopLink(item.tab)}
                  style={{ ...linkStyle, cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ff3f6c")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.65)")
                  }
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          ...bottomBarStyle,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "12px" : "0",
          textAlign: "center",
        }}
      >
        <span>
          © 2026 Abhy Clothing. All rights reserved.{" "}
          <br style={{ display: isMobile ? "block" : "none" }} />| Made with ❤️
          in India 🇮🇳
        </span>
        <span>Jaipur, Rajasthan</span>
      </div>
    </footer>
  );
}

const logoStyles = {
  wrapper: {
    width: "60px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background: "transparent",
  },
  image: {
    height: "120px",
    width: "auto",
    transform: "scale(2.2)",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
  },
};

const socialButtonStyle = {
  fontSize: "0.65rem",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  padding: "6px 12px",
  borderRadius: 4,
  textDecoration: "none",
  transition: "background 0.2s",
  whiteSpace: "nowrap",
};

const columnHeaderStyle = {
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.4)",
  marginBottom: 14,
  fontWeight: 700,
};

const listStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const linkStyle = {
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  fontSize: "0.82rem",
  transition: "color 0.2s",
};

const bottomBarStyle = {
  borderTop: "1px solid rgba(255,255,255,0.1)",
  paddingTop: 16,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "0.75rem",
  color: "rgba(255,255,255,0.35)",
};
