import React from "react";
import {
  X,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

export default function CartSidebar({ items, onClose, onRemove, onUpdateQty }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const mrpTotal = items.reduce((sum, i) => sum + i.mrp * i.qty, 0);
  const savings = mrpTotal - total;
  const isFreeDelivery = total >= 499;

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} style={styles.overlay} />

      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={{ fontWeight: 800 }}>SHOPPING BAG</span>
            <span style={styles.itemCount}>({items.length} Items)</span>
          </div>
          <button onClick={onClose} style={styles.closeBtn}>
            <X size={24} />
          </button>
        </div>

        {/* Delivery Bar */}
        <div
          style={{
            ...styles.deliveryBar,
            backgroundColor: isFreeDelivery ? "#f0fff8" : "#fff3f6",
          }}
        >
          {isFreeDelivery ? (
            <span style={{ color: "#03a685" }}>
              🎉 <b>Free Delivery</b> applied to this order!
            </span>
          ) : (
            <span style={{ color: "#ff3f6c" }}>
              Add <b>₹{499 - total}</b> more for <b>Free Delivery</b>
            </span>
          )}
        </div>

        {/* Scrollable Items Container */}
        <div style={styles.itemsScroll}>
          {items.length === 0 ? (
            <EmptyState onClose={onClose} />
          ) : (
            items.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemove={() => onRemove(index)}
              />
            ))
          )}
        </div>

        {/* Checkout Footer */}
        {items.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.priceDetailHeader}>
              PRICE DETAILS ({items.length} Items)
            </div>

            <div style={styles.priceRow}>
              <span>Total MRP</span>
              <span style={{ textDecoration: "line-through" }}>
                ₹{mrpTotal}
              </span>
            </div>

            <div style={styles.priceRow}>
              <span>Discount on MRP</span>
              <span style={{ color: "#03a685" }}>-₹{savings}</span>
            </div>

            <div style={styles.priceRow}>
              <span>Convenience Fee</span>
              <span>
                {isFreeDelivery ? (
                  <span style={{ color: "#03a685" }}>FREE</span>
                ) : (
                  "₹49"
                )}
              </span>
            </div>

            <div style={styles.totalRow}>
              <span>Total Amount</span>
              <span>₹{total + (isFreeDelivery ? 0 : 49)}</span>
            </div>

            <button style={styles.checkoutBtn}>PLACE ORDER</button>

            <div style={styles.secureText}>
              <ShieldCheck size={14} /> 100% SECURE PAYMENTS
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const CartItem = ({ item, onRemove }) => (
  <div style={styles.itemCard}>
    <div style={styles.itemImageWrapper}>
      <img src={item.img} alt={item.name} style={styles.itemImage} />
    </div>

    <div style={styles.itemDetails}>
      <div style={styles.itemBrand}>{item.brand}</div>
      <div style={styles.itemName}>{item.name}</div>

      <div style={styles.qtyContainer}>
        <div style={styles.qtyBox}>Qty: {item.qty}</div>
      </div>

      <div style={styles.itemPriceRow}>
        <span style={styles.currentPrice}>₹{item.price}</span>
        <span style={styles.oldPrice}>₹{item.mrp}</span>
        <span style={styles.discountBadge}>{item.discount}% OFF</span>
      </div>

      <div style={styles.deliveryNote}>
        <Truck size={12} /> 14 day return available
      </div>
    </div>

    <button onClick={onRemove} style={styles.removeBtn}>
      <X size={18} />
    </button>
  </div>
);

const EmptyState = ({ onClose }) => (
  <div style={styles.emptyContainer}>
    <ShoppingBag size={80} color="#d4d5d9" strokeWidth={1} />
    <h3 style={{ margin: "20px 0 10px", color: "#282c3f" }}>
      Your bag is empty!
    </h3>
    <p
      style={{
        color: "#7e818c",
        fontSize: "14px",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      There is nothing in your bag. Let's add some items.
    </p>
    <button onClick={onClose} style={styles.continueBtn}>
      CONTINUE SHOPPING
    </button>
  </div>
);

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 999,
  },
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "420px",
    background: "#fff",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "20px",
    borderBottom: "1px solid #eaeaec",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: { fontSize: "14px", letterSpacing: "1px", color: "#282c3f" },
  itemCount: { marginLeft: "8px", color: "#7e818c", fontWeight: 400 },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#282c3f",
  },
  deliveryBar: { padding: "12px 20px", fontSize: "12px", textAlign: "center" },
  itemsScroll: { flex: 1, overflowY: "auto", padding: "20px" },
  itemCard: {
    display: "flex",
    gap: "15px",
    padding: "15px",
    border: "1px solid #eaeaec",
    borderRadius: "4px",
    marginBottom: "15px",
    position: "relative",
  },
  itemImageWrapper: { width: "80px", height: "105px", flexShrink: 0 },
  itemImage: { width: "100%", height: "100%", objectFit: "cover" },
  itemDetails: { flex: 1 },
  itemBrand: { fontWeight: 700, fontSize: "14px", color: "#282c3f" },
  itemName: { fontSize: "13px", color: "#535766", marginBottom: "8px" },
  qtyContainer: { marginBottom: "8px" },
  qtyBox: {
    display: "inline-block",
    padding: "2px 8px",
    background: "#f5f5f6",
    borderRadius: "2px",
    fontSize: "12px",
    fontWeight: 700,
  },
  itemPriceRow: { display: "flex", alignItems: "center", gap: "8px" },
  currentPrice: { fontWeight: 800, fontSize: "14px" },
  oldPrice: {
    textDecoration: "line-through",
    color: "#7e818c",
    fontSize: "12px",
  },
  discountBadge: { color: "#ff905a", fontSize: "12px", fontWeight: 700 },
  deliveryNote: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#282c3f",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  removeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#7e818c",
  },
  footer: {
    padding: "20px",
    borderTop: "1px solid #eaeaec",
    background: "#fff",
  },
  priceDetailHeader: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#7e818c",
    marginBottom: "15px",
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "14px",
    color: "#282c3f",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    paddingTop: "15px",
    borderTop: "1px solid #eaeaec",
    fontWeight: 800,
    fontSize: "16px",
  },
  checkoutBtn: {
    width: "100%",
    padding: "15px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: 800,
    cursor: "pointer",
    letterSpacing: "1px",
  },
  secureText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    marginTop: "12px",
    fontSize: "11px",
    color: "#9496a5",
  },
  emptyContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  continueBtn: {
    padding: "12px 30px",
    border: "1px solid #ff3f6c",
    color: "#ff3f6c",
    background: "#fff",
    fontWeight: 700,
    borderRadius: "4px",
    cursor: "pointer",
  },
};
