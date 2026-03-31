import React, { useState, useEffect } from "react";
import { Mail, Send, MessageCircle, User } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) setSent(true);
  };

  return (
    <section
      id="contact"
      style={{
        ...styles.section,
        padding: isMobile ? "60px 5%" : "80px 4%",
      }}
    >
      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
          gap: isMobile ? "40px" : "60px",
        }}
      >
        {/* Left Side: Contact Info */}
        <div style={styles.infoColumn}>
          <div style={styles.badge}>SUPPORT CENTER</div>
          <h2
            style={{
              ...styles.heading,
              fontSize: isMobile ? "28px" : "36px",
            }}
          >
            Get in Touch with Us
          </h2>
          <p
            style={{
              ...styles.subtext,
              fontSize: isMobile ? "15px" : "16px",
              marginBottom: isMobile ? "30px" : "40px",
            }}
          >
            Have a question about your order or need style advice? Our dedicated
            team is ready to assist you.
          </p>

          <div style={styles.contactList}>
            <ContactCard
              icon={<User size={20} color="#ff3f6c" />}
              label="Owner"
              value="Ashok Kumar Bairwa"
              note="Abhy Clothing"
            />
            <ContactCard
              icon={<Mail size={20} color="#ff3f6c" />}
              label="Email Support"
              value="Bairwaashok96@gmail.com"
            />
            <ContactCard
              icon={<MessageCircle size={20} color="#ff3f6c" />}
              label="WhatsApp"
              value="+91 82336 00439"
            />
            <ContactCard
              icon={<User size={20} color="#ff3f6c" />}
              label="Instagram"
              value="@ashokkumar.bairwa.106"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={styles.formColumn}>
          <div
            style={{
              ...styles.formCard,
              padding: isMobile ? "25px" : "40px",
            }}
          >
            <h3 style={styles.formTitle}>Send a Message</h3>
            {sent ? (
              <SuccessState />
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                  {["name", "email", "phone"].map((field) => (
                    <input
                      key={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      placeholder={
                        field.charAt(0).toUpperCase() +
                        field.slice(1) +
                        (field === "phone" ? " (Optional)" : "")
                      }
                      value={form[field]}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        setForm({ ...form, [field]: e.target.value })
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          focusedField === field ? "#ff3f6c" : "#d4d5d9",
                        boxShadow:
                          focusedField === field
                            ? "0 0 0 3px rgba(255, 63, 108, 0.1)"
                            : "none",
                      }}
                      required={field !== "phone"}
                    />
                  ))}
                  <textarea
                    placeholder="Describe your issue or inquiry..."
                    value={form.message}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      ...styles.textarea,
                      borderColor:
                        focusedField === "message" ? "#ff3f6c" : "#d4d5d9",
                    }}
                    required
                  />
                </div>
                <button type="submit" style={styles.submitBtn}>
                  <Send size={18} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactCard = ({ icon, label, value, note }) => (
  <div style={styles.contactItem}>
    <div style={styles.iconBox}>{icon}</div>
    <div>
      <div style={styles.itemLabel}>{label}</div>
      <div style={styles.itemValue}>{value}</div>
      {note && <div style={styles.itemNote}>{note}</div>}
    </div>
  </div>
);

const SuccessState = () => (
  <div style={styles.successContainer}>
    <div style={styles.successIcon}>✓</div>
    <h4 style={styles.successTitle}>Sent Successfully!</h4>
    <p style={styles.successText}>
      We've received your message and will get back to you shortly.
    </p>
  </div>
);

const styles = {
  section: {
    background: "#fff",
    borderBottom: "1px solid #eaeaec",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    alignItems: "center",
  },
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
  subtext: {
    color: "#7e818c",
    lineHeight: 1.6,
  },
  contactList: { display: "flex", flexDirection: "column", gap: "24px" },
  contactItem: { display: "flex", gap: "15px", alignItems: "center" },
  iconBox: {
    width: "48px",
    height: "48px",
    background: "#fff1f4",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  itemLabel: {
    fontSize: "11px",
    color: "#9496a5",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  itemValue: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#282c3f",
    wordBreak: "break-all",
  },
  itemNote: { fontSize: "13px", color: "#ff3f6c" },
  formCard: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
    border: "1px solid #f5f5f6",
  },
  formTitle: {
    fontSize: "20px",
    fontWeight: 800,
    marginBottom: "24px",
    color: "#282c3f",
  },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "12px" },
  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid",
    fontSize: "14px",
    transition: "all 0.2s ease",
    outline: "none",
  },
  textarea: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid",
    fontSize: "14px",
    minHeight: "120px",
    outline: "none",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
  },
  submitBtn: {
    background: "#ff3f6c",
    color: "#fff",
    padding: "16px",
    border: "none",
    borderRadius: "8px",
    fontWeight: 800,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "0.3s",
  },
  successContainer: { textAlign: "center", padding: "10px" },
  successIcon: {
    width: "50px",
    height: "50px",
    background: "#03a685",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
    fontSize: "24px",
  },
  successTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#282c3f",
    marginBottom: "10px",
  },
  successText: { color: "#7e818c", fontSize: "14px" },
};
