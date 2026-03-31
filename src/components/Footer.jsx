import React, { useState, useEffect } from "react";
import LogoIcon from "../assets/logo.png";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resizing for responsive layouts
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cols = [
    {
      title: "ONLINE SHOPPING",
      links: ["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Cards"],
    },
    {
      title: "CUSTOMER POLICIES",
      links: [
        "Contact Us",
        "FAQ",
        "T&C",
        "Privacy Policy",
        "Grievance Redressal",
        "Return Policy",
      ],
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
          // Switch to 1 column on mobile, 3 columns on desktop
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
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

          {/* Social Icons - Flex wrap for mobile screens */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 18,
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {["📘 Facebook", "📸 Instagram", "🐦 Twitter", "▶️ YouTube"].map(
              (s) => (
                <a
                  key={s}
                  href="#"
                  style={socialButtonStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#ff3f6c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                  }
                >
                  {s}
                </a>
              ),
            )}
          </div>
        </div>

        {/* Links Columns */}
        {cols.map((col) => (
          <div
            key={col.title}
            style={{ textAlign: isMobile ? "center" : "left" }}
          >
            <h4 style={columnHeaderStyle}>{col.title}</h4>
            <ul style={{ ...listStyle, padding: 0 }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = "#ff3f6c")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.65)")
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar - Stack on mobile */}
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
