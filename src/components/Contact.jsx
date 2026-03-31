import React, { useState, useEffect } from "react";
import { Mail, MessageCircle, User, Camera, ShoppingCart } from "lucide-react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="contact"
      style={{
        ...styles.section,
        padding: isMobile ? "60px 5%" : "80px 4%",
      }}
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>SUPPORT CENTER</div>
          <h2
            style={{ ...styles.heading, fontSize: isMobile ? "28px" : "36px" }}
          >
            Contact Us
          </h2>
          <p
            style={{
              ...styles.subtext,
              fontSize: isMobile ? "15px" : "16px",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Have a question? Reach out to us directly or follow us on social
            media for the latest updates.
          </p>
        </div>

        <div
          style={{
            ...styles.contactGrid,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          }}
        >
          <ContactCard
            icon={<User size={24} color="#ff3f6c" />}
            label="Owner"
            value="Ashok Kumar Bairwa"
            note="Abhy Clothing"
          />
          <ContactCard
            icon={<Mail size={24} color="#ff3f6c" />}
            label="Email Support"
            value="Bairwaashok96@gmail.com"
          />
          <ContactCard
            icon={<MessageCircle size={24} color="#ff3f6c" />}
            label="WhatsApp"
            value="+91 82336 00439"
            href="https://wa.me/918233600439"
          />
          <ContactCard
            icon={<Camera size={24} color="#ff3f6c" />}
            label="Instagram"
            value="@ashokkumar.bairwa.106"
            href="https://www.instagram.com/ashokkumar.bairwa.106"
          />
          <ContactCard
            icon={<Camera size={24} color="#ff3f6c" />}
            label="Facebook"
            value="Abhy Clothing"
            href="https://www.facebook.com/your-page-url" // Update this link
          />
          <ContactCard
            icon={<ShoppingCart size={24} color="#ff3f6c" />}
            label="Amazon"
            value="Abhy Clothing"
            href="https://amzn.in/d/0fniRNSb" // Update this link
          />
        </div>
      </div>
    </section>
  );
}

const ContactCard = ({ icon, label, value, note, href }) => {
  const content = (
    <div
      style={{ ...styles.contactCard, cursor: href ? "pointer" : "default" }}
    >
      <div style={styles.iconBox}>{icon}</div>
      <div style={styles.cardContent}>
        <div style={styles.itemLabel}>{label}</div>
        <div style={styles.itemValue}>{value}</div>
        {note && <div style={styles.itemNote}>{note}</div>}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {content}
      </a>
    );
  }

  return content;
};

const styles = {
  section: { background: "#fff", borderBottom: "1px solid #eaeaec" },
  container: { maxWidth: "900px", margin: "0 auto", textAlign: "center" },
  header: { marginBottom: "20px" },
  badge: {
    color: "#ff3f6c",
    fontWeight: 800,
    fontSize: "12px",
    letterSpacing: "2px",
    marginBottom: "16px",
  },
  heading: {
    fontWeight: 900,
    color: "#282c3f",
    marginBottom: "16px",
    lineHeight: 1.2,
  },
  subtext: { color: "#7e818c", lineHeight: 1.6 },
  contactGrid: { display: "grid", gap: "20px", marginTop: "20px" },
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "24px",
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #f5f5f6",
    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
    textAlign: "left",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  iconBox: {
    width: "56px",
    height: "56px",
    background: "#fff1f4",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardContent: { display: "flex", flexDirection: "column", gap: "4px" },
  itemLabel: {
    fontSize: "11px",
    color: "#9496a5",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  itemValue: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#282c3f",
    wordBreak: "break-all",
  },
  itemNote: { fontSize: "13px", color: "#ff3f6c", fontWeight: 600 },
};
