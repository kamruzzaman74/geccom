import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarCart({ open, close, cart, removeFromCart }) {
  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <aside
      className={`sidebar ${open ? 'open' : ''}`}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "350px",
        maxWidth: "100%",
        background: "#ffffff",
        boxShadow: "-2px 0 20px rgba(0,0,0,0.1)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        transition: "0.35s ease",
        transform: open ? "translateX(0)" : "translateX(110%)",
        zIndex: 2000,
      }}
    >
      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 700 }}>Your Cart</h3>
        <button
          onClick={close}
          style={{
            fontSize: 24,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: 700
          }}
        >
          ×
        </button>
      </div>

      {/* ITEMS */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        paddingRight: 6,
      }}>
        {cart.length === 0 ? (
          <p style={{ color: "#6b7280" }}>Your cart is empty</p>
        ) : (
          cart.map((it, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #f1f1f1"
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{it.name}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>{it.category}</div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700 }}>৳ {it.price}</div>
                <button
                  onClick={() => removeFromCart(idx)}
                  style={{
                    color: "#ef4444",
                    marginTop: 6,
                    fontSize: 13,
                    background: "none",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* TOTAL + CHECKOUT BUTTON */}
      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 16 }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12
        }}>
          <span style={{ color: "#6b7280" }}>Subtotal</span>
          <span style={{ fontWeight: 800 }}>৳ {total}</span>
        </div>

        <Link to="/checkout">
          <button
            className="btn"
            style={{
              width: "100%",
              padding: "12px 0",
              background: "#2563eb",
              color: "#fff",
              borderRadius: 8,
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 16
            }}
          >
            Go to Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}
