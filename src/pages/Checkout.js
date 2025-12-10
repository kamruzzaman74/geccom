import React, { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or API call here
    setOrderPlaced(true); // Show the success message
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "50px auto",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      {!orderPlaced ? (
        <>
          <h2 style={{ marginBottom: 24 }}>Checkout</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              style={{
                padding: 14,
                borderRadius: 8,
                border: "none",
                background: "#4f46e5",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#7c3aed")}
              onMouseOut={(e) => (e.target.style.background = "#4f46e5")}
            >
              Place Order
            </button>
          </form>
        </>
      ) : (
        <div>
          <h2 style={{ color: "green", fontWeight: 700, marginBottom: 12 }}>
            ✅ Your order is placed!
          </h2>
          <p>Thank you for shopping with us. We will deliver your items soon.</p>
        </div>
      )}
    </div>
  );
}
