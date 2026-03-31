import React, { useState } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";

/* ─────────────────────────────────────────
   RESPONSIVE STYLES (injected once)
───────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700;800;900&display=swap');

  .offer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .review-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .newsletter-row {
    display: flex;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(255,63,108,0.3);
    border: 1px solid rgba(255,255,255,0.08);
  }

  @media (max-width: 900px) {
    .review-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .offer-grid {
      grid-template-columns: 1fr;
    }
    .review-grid {
      grid-template-columns: 1fr;
    }
    .offer-banner {
      height: 240px !important;
    }
    .offer-banner h3 {
      font-size: 28px !important;
    }
    .testimonials-header {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 16px;
    }
    .newsletter-row {
      flex-direction: column;
      border-radius: 16px;
    }
    .newsletter-row input {
      border-radius: 12px 12px 0 0 !important;
    }
    .newsletter-row button {
      border-radius: 0 0 12px 12px !important;
      padding: 14px 24px !important;
    }
    .newsletter-section {
      padding: 48px 5% !important;
    }
    .offer-section {
      padding: 36px 5% !important;
    }
    .testimonials-section {
      padding: 40px 5% !important;
    }
  }
`;

function StyleInjector() {
  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
}

/* ─────────────────────────────────────────
   OFFER BANNERS
───────────────────────────────────────── */
export function OfferBanners() {
  const promos = [
    {
      title: "WOMEN'S ETHNIC",
      offer: "UP TO 70% OFF",
      sub: "Sarees · Kurtas · Lehengas",
      img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
      isLight: true,
    },
    {
      title: "MEN'S CASUALS",
      offer: "STARTING ₹499",
      sub: "Shirts · Trousers · Formals",
      img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800",
      isLight: false,
    },
  ];

  return (
    <>
      <StyleInjector />
      <section
        className="offer-section"
        style={{
          padding: "48px 4%",
          background: "#fafafa",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "#ff3f6c",
              textTransform: "uppercase",
            }}
          >
            LIMITED TIME
          </span>
          <h2
            style={{
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 900,
              color: "#1a1a2e",
              margin: "6px 0 0",
            }}
          >
            Deals You Can't Miss
          </h2>
        </div>

        <div
          className="offer-grid"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {promos.map((p) => (
            <div
              key={p.title}
              className="offer-banner"
              style={{
                height: "300px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.15)";
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: p.isLight
                    ? "linear-gradient(to right, rgba(255,63,108,0.88) 45%, transparent 100%)"
                    : "linear-gradient(to right, rgba(26,26,46,0.88) 45%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "clamp(24px, 5%, 40px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "3px",
                    color: "rgba(255,255,255,0.75)",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  {p.title}
                </span>
                <h3
                  style={{
                    fontSize: "clamp(24px, 4vw, 38px)",
                    fontWeight: 900,
                    color: "#fff",
                    margin: "0 0 6px",
                    lineHeight: 1,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {p.offer}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "24px",
                    letterSpacing: "1px",
                  }}
                >
                  {p.sub}
                </p>
                <button
                  style={{
                    width: "fit-content",
                    padding: "12px 28px",
                    background: "#fff",
                    color: "#1a1a2e",
                    border: "none",
                    borderRadius: "50px",
                    fontWeight: 800,
                    fontSize: "12px",
                    letterSpacing: "1px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                >
                  SHOP NOW <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────── */
export function Testimonials() {
  const reviews = [
    {
      name: "Sneha Gupta",
      city: "Delhi",
      rating: 5,
      text: "Amazing quality! Got my Diwali kurta set in just 2 days. Perfect stitching and exactly as shown in pics 😍",
      order: "Anarkali Kurta Set",
    },
    {
      name: "Rahul Sharma",
      city: "Jaipur",
      rating: 5,
      text: "Best price for branded clothes! Got a formal shirt at 50% off. Super happy with the purchase 👌",
      order: "Men's Formal Shirt",
    },
    {
      name: "Priya Mehta",
      city: "Mumbai",
      rating: 4,
      text: "The saree quality is excellent! Only took 3 days to deliver. Will definitely order more for my family.",
      order: "Banglori Silk Saree",
    },
    {
      name: "Anjali Singh",
      city: "Lucknow",
      rating: 5,
      text: "Ordered lehenga for sister's wedding. Got it well in time and the embroidery is beautiful. Love it! 💕",
      order: "Bridal Lehenga",
    },
  ];

  return (
    <section
      className="testimonials-section"
      style={{
        padding: "60px 4%",
        background: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="testimonials-header"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto 36px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "#ff3f6c",
              textTransform: "uppercase",
            }}
          >
            REAL BUYERS
          </span>
          <h2
            style={{
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 900,
              color: "#1a1a2e",
              margin: "6px 0 0",
            }}
          >
            What Our Customers Say
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#f5f5f6",
            padding: "10px 20px",
            borderRadius: "50px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              background: "#14958f",
              color: "white",
              padding: "4px 12px",
              borderRadius: "50px",
              fontWeight: 900,
              fontSize: "14px",
            }}
          >
            4.4 ★
          </span>
          <span style={{ fontSize: "13px", color: "#696b79", fontWeight: 600 }}>
            1,23,456 ratings
          </span>
        </div>
      </div>

      <div
        className="review-grid"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "28px 24px",
              border: "1px solid #eaeaec",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              position: "relative",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(255,63,108,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
            }}
          >
            <Quote
              size={28}
              style={{
                color: "#ff3f6c",
                opacity: 0.15,
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
            <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  fill={j < r.rating ? "#ff3f6c" : "none"}
                  color={j < r.rating ? "#ff3f6c" : "#ddd"}
                />
              ))}
            </div>
            <p
              style={{
                fontSize: "13.5px",
                color: "#535766",
                lineHeight: 1.7,
                margin: "0 0 20px",
                minHeight: "80px",
              }}
            >
              {r.text}
            </p>
            <div
              style={{
                fontSize: "11px",
                color: "#ff3f6c",
                fontWeight: 700,
                background: "#fff1f4",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "50px",
                marginBottom: "16px",
                letterSpacing: "0.3px",
              }}
            >
              📦 {r.order}
            </div>
            <div
              style={{
                borderTop: "1px solid #f5f5f6",
                paddingTop: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff3f6c, #ff6b35)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "15px",
                  flexShrink: 0,
                }}
              >
                {r.name[0]}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "#282c3f",
                  }}
                >
                  {r.name}
                </div>
                <div style={{ fontSize: "11px", color: "#9496a5" }}>
                  {r.city}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  color: "#03a685",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                }}
              >
                ✓ VERIFIED
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────── */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      className="newsletter-section"
      style={{
        padding: "70px 4%",
        background: "#1a1a2e",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,63,108,0.18), transparent 70%)",
          top: "-100px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.15), transparent 70%)",
          bottom: "-80px",
          right: "10%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "580px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "4px",
            color: "#ff3f6c",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "12px",
          }}
        >
          STAY IN THE LOOP
        </span>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          Exclusive Deals &<br />
          <span style={{ color: "#ff3f6c" }}>New Arrivals</span> First
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            marginBottom: "36px",
            fontSize: "clamp(13px, 2vw, 15px)",
            lineHeight: 1.6,
          }}
        >
          Get style tips, sale alerts & festival offers — straight to your inbox
          every week.
        </p>

        {done ? (
          <div
            style={{
              background: "rgba(3,166,133,0.15)",
              border: "1px solid rgba(3,166,133,0.3)",
              borderRadius: "12px",
              padding: "20px 32px",
              color: "#03a685",
              fontWeight: 800,
              fontSize: "16px",
            }}
          >
            ✅ You're subscribed! Great deals coming soon.
          </div>
        ) : (
          <div className="newsletter-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: "16px 24px",
                border: "none",
                fontSize: "14px",
                outline: "none",
                color: "#1a1a2e",
                background: "#fff",
                fontFamily: "inherit",
                minWidth: 0, // prevents overflow in flex
              }}
            />
            <button
              onClick={() => email && setDone(true)}
              style={{
                background: "linear-gradient(120deg, #ff3f6c, #ff6b35)",
                color: "white",
                padding: "16px 32px",
                border: "none",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              SUBSCRIBE →
            </button>
          </div>
        )}

        <p
          style={{
            marginTop: "16px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   DEMO PAGE
───────────────────────────────────────── */
