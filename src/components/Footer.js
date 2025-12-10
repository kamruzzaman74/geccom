import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#e2e8f0",
        padding: "50px 0",
        marginTop: 40,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* Brand */}
        <div style={{ flex: "1 1 260px", minWidth: 240 }}>
          <h2
            style={{
              margin: 0,
              color: "#38bdf8",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Cox Computer
          </h2>
          <p style={{ marginTop: 10, color: "#cbd5e1", lineHeight: 1.5 }}>
            Premium Computers • CCTV • Printers • Gadgets  
            <br />Fast delivery • Trusted tech shop
          </p>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 220px", minWidth: 240 }}>
          <h4 style={{ marginBottom: 12, color: "#38bdf8" }}>Contact Us</h4>

          <div style={{ marginBottom: 8, fontSize: 15 }}>
            📞 <a href="tel:01814934574" style={{ color: "#e2e8f0", textDecoration: "none" }}>01814934574</a>
          </div>

          <div style={{ marginBottom: 8, fontSize: 15 }}>
            ✉️ <a href="mailto:coxcomputer91@gmail.com" style={{ color: "#e2e8f0", textDecoration: "none" }}>coxcomputer91@gmail.com</a>
          </div>

          <div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.5 }}>
            📍 Shop01, DNCC Market (2nd Floor),  
            <br />Gulshan-2, Dhaka-1212
          </div>
        </div>

        {/* Social */}
        <div style={{ flex: "1 1 220px", minWidth: 240 }}>
          <h4 style={{ marginBottom: 12, color: "#38bdf8" }}>Follow Us</h4>

          <a
            href="https://facebook.com/fb.coxcomputer91@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#1d4ed8",
              padding: "10px 18px",
              borderRadius: 8,
              color: "white",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            🔵 Facebook Page
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          paddingTop: 20,
          borderTop: "1px solid #334155",
          fontSize: 14,
          color: "#94a3b8",
        }}
      >
        © growMore19— enhance your oppourtunity
      </div>
    </footer>
  );
}
