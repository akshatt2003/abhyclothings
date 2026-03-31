import React from "react";
import LogoIcon from "../assets/logo.png"; // Adjust path as needed

export default function Footer() {
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
        padding: "40px 32px 16px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "40px",
          marginBottom: 32,
        }}
      >
        {/* Brand col */}
        <div>
          {/* LOGO ONLY - NO TEXT, NO WHITE BG */}
          <div style={logoStyles.wrapper}>
            <img src={LogoIcon} alt="CA Logo" style={logoStyles.image} />
          </div>

          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 16,
              marginTop: 10, // Added space since text is gone
              textTransform: "uppercase",
            }}
          >
            Style That Speaks
          </div>

          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              marginBottom: 8,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Bringing the best of Indian & Western fashion to your doorstep.
            Trusted by customers across India.
          </p>

          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              marginBottom: 18,
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
          <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
            {["📘 Facebook", "📸 Instagram", "🐦 Twitter", "▶️ YouTube"].map(
              (s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontSize: "0.65rem",
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "background 0.2s",
                    whiteSpace: "nowrap",
                  }}
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

        {cols.map((col) => (
          <div key={col.title}>
            <h4 style={columnHeaderStyle}>{col.title}</h4>
            <ul style={listStyle}>
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

      <div style={bottomBarStyle}>
        <span>
          © 2026 Abhy Clothing. All rights reserved. | Made with ❤️ in India 🇮🇳
        </span>
        <span>Jaipur, Rajasthan</span>
      </div>
    </footer>
  );
}

// Updated styles to remove background and center icon
const logoStyles = {
  wrapper: {
    width: "60px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // Aligns icon to the left edge of the column
    overflow: "hidden",
    background: "transparent", // Background removed
  },
  image: {
    height: "120px",
    width: "auto",
    transform: "scale(2.2)", // Zoomed in on the CA symbol
    objectFit: "contain",
    filter: "brightness(0) invert(1)", // Makes the black logo white so it's visible on dark bg
  },
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
