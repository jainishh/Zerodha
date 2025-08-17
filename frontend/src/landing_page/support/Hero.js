import React from "react";

function Hero() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f6f6f6",
        padding: "24px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: 600,
              color: "#424242",
              fontSize: "2.1rem",
              margin: 0,
              flex: 1, // Allow heading to take available space
            }}
          >
            Support Portal
          </h1>
          <button
            style={{
              background: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "7px 18px",
              fontWeight: "500",
              fontSize: "1rem",
              cursor: "pointer",
              marginLeft: "24px",
            }}
          >
            My tickets
          </button>
        </div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              background: "#fff",
              border: "1px solid #e3e6e8",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              marginLeft: 0,
            }}
          >
            <span
              style={{
                marginRight: "10px",
                color: "#b0b0b0",
                fontSize: "1.1rem",
              }}
            >
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "1rem",
                color: "#757575",
                background: "transparent",
                height: "35px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
