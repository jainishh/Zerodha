import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container">
      <div className="row p-4 align-items-center">
        <div className="col-12 col-md-6 py-5">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div>
            <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
              See pricing&nbsp;
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ color: "#387ed1" }}
              ></i>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-sm-12 pricing-block-div ">
          <div className="text-center pricing-block">
            <img src="media/images/pricing0.svg" alt="Free account opening" />
            <p>
              Free account
              <br />
              opening
            </p>
          </div>
          <div className="text-center pricing-block">
            <img src="media/images/pricing0.svg" alt="Free equity delivery" />
            <p>
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>
          <div className="text-center pricing-block">
            <img src="media/images/pricing20.svg" alt="Intraday and F&O" />
            <p>
              Intraday and
              <br />
              F&amp;O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
