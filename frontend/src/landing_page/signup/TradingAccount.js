import React, { useState } from "react";
import "./TradingAccount.css"; // 🔹 optional CSS file if you want to style separately

function TradingAccount() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container  mt-5">
      <div className="row top align-items-center justify-content-between">
        {/* Left Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media\images\tradingaccount.svg"
            alt="Preview"
            className="img-fluid"
            style={{ maxWidth: "550px" }}
          />
        </div>

        {/* Right Form Section */}
        <div className="col-12 col-md-5">
          <h2
            className=" text-center mb-2"
            style={{ color: "#424242", fontSize: "1.6rem", fontWeight: "500" }}
          >
            Open a free demat and trading account online
          </h2>

          <p className="text-center mb-4" style={{ color: "#666666" }}>
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>

          <h4
            className="fw-semibold mb-3 text-center"
            style={{ color: "#424242" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </h4>

          <form>
            {!isLogin && (
              <div className="mb-3">
                <label style={{ color: "#424242" }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ color: "#666666" }}
                  placeholder="Enter name"
                />
              </div>
            )}

            <div className="mb-3">
              <label style={{ color: "#424242" }}>Email</label>
              <input
                type="email"
                className="form-control"
                style={{ color: "#666666" }}
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label style={{ color: "#424242" }}>Password</label>
              <input
                type="password"
                className="form-control"
                style={{ color: "#666666" }}
                placeholder="Enter password"
              />
            </div>

            <button
              className="btn w-100 text-white"
              style={{
                background: "#387ED1",
                padding: "10px",
                borderRadius: "25px",
              }}
            >
              {isLogin ? "LOGIN" : "SIGN UP"}
            </button>
          </form>

          <p className="text-center mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              style={{ cursor: "pointer", fontWeight: 500, color: "#387ED1" }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TradingAccount;
