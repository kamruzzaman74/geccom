import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
        padding: "60px 20px",
        borderRadius: "0 0 40px 40px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        marginBottom: 40,
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        {/* Left Text */}
        <div style={{ flex: "1 1 350px", color: "white" }}>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 900,
              lineHeight: "1.2",
              textShadow: "0px 0px 12px rgba(255,255,255,0.6)",
            }}
          >
            Your Trusted Store for  
            <span style={{ color: "#fbbf24" }}> IT Products</span>
          </h1>

          <p
            style={{
              marginTop: 12,
              fontSize: 18,
              color: "#e0e7ff",
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            Premium laptops, printers, CCTV cameras, desktops and gadgets —  
            delivered fast with the best pricing in Bangladesh.
          </p>

          <div style={{ marginTop: 24 }}>
            <a
              href="#products"
              style={{
                background: "#fbbf24",
                color: "#1f2937",
                padding: "14px 28px",
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 14px rgba(251,191,36,0.6)",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.boxShadow = "0 6px 18px rgba(251,191,36,0.9)")}
              onMouseOut={(e) => (e.target.style.boxShadow = "0 4px 14px rgba(251,191,36,0.6)")}
            >
              Shop Now →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div style={{ flex: "1 1 350px" }}>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=60"
            alt="hero"
            style={{
              width: "100%",
              maxWidth: 460,
              borderRadius: 20,
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
