import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrialShortlinkFeature = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to pricing page with hash for section
    navigate("/pricing-page#plans");
  };


  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "24px",
        maxWidth: "500px",
      }}
    >
      {/* Card Header */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#1f4529",
          marginBottom: "12px",
        }}
      >
        QR Synch
      </h2>

      {/* Subtitle */}
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#1c1c1c",
          marginBottom: "6px",
        }}
      >
        Shorten a long link
      </h3>
      <p style={{ fontSize: "14px", color: "#6b6b6b", marginBottom: "14px" }}>
        Experience the power of QRSynch.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="url"
          placeholder="https://example.com/my-long-url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          style={{
            flex: "1",
            padding: "12px 14px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "14px",
            minWidth: "240px",
          }}
        />
        <button
          type="submit"
          disabled={!longUrl}
          style={{
            backgroundColor: longUrl ? "#1f4529" : "#ccc",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: longUrl ? "pointer" : "not-allowed",
            transition: "background 0.3s",
          }}
        >
          Get your link →
        </button>
      </form>
    </div>
  );
};

export default TrialShortlinkFeature;