import React from "react";

export default function ProductCard({ p, addToCart }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {/* Product Image */}
      <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
        <img
          src={p.img}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Product Info */}
      <div
        style={{
          padding: 16,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{p.name}</h3>
          <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 8 }}>{p.category}</p>
        </div>

        {/* Price & Add Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>৳ {p.price}</span>
          <button
            onClick={() => addToCart(p)}
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: 8,
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#7c3aed")}
            onMouseLeave={(e) => (e.target.style.background = "#4f46e5")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
