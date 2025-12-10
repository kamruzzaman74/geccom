import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ cartCount, openCart, setSearch }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleBrandClick = () => {
    setClicked(true);            // Set clicked state
    navigate("/");               // Go to home
    setTimeout(() => setClicked(false), 300); // Reset after 0.3s
  };

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        padding: "16px 0",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {/* Brand + Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            flex: "1 1 280px",
          }}
        >
          {/* Brand Name */}
          <div
            onClick={handleBrandClick}
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: clicked ? "#ffdd00" : "#fff", // Change color on click
              textShadow: "0 0 12px rgba(255,255,255,0.8)",
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffe600")}
            onMouseLeave={(e) => (e.currentTarget.style.color = clicked ? "#ffdd00" : "#fff")}
          >
            Cox Computer
          </div>

          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(12px)",
              padding: "12px 16px",
              borderRadius: 16,
              flex: "1 1 260px",
              minWidth: 220,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
            }}
          >
            <FaSearch color="#fff" size={16} />
            <input
              placeholder="Search products..."
              onChange={(e) => setSearch && setSearch(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#fff",
                fontSize: 15,
                width: "100%",
                fontWeight: 500,
              }}
            />
          </div>
        </div>

        {/* Phone + Cart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {/* Phone */}
          <a
            href="tel:01814934574"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#4f46e5",
              padding: "10px 18px",
              borderRadius: 16,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              boxShadow: "0 0 12px rgba(79,70,229,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7c3aed")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4f46e5")}
          >
            <FaPhoneAlt /> 01814934574
          </a>

          {/* Cart Button */}
          <button
            onClick={openCart}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#f59e0b",
              color: "#1f2937",
              padding: "10px 20px",
              borderRadius: 16,
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
              fontSize: 15,
              boxShadow: "0 0 16px rgba(245,158,11,0.7)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d97706")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f59e0b")}
          >
            <FaShoppingCart /> Cart
            <span
              style={{
                background: "#fff",
                color: "#000",
                borderRadius: 10,
                padding: "4px 12px",
                fontWeight: 800,
                fontSize: 14,
                marginLeft: 6,
              }}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
