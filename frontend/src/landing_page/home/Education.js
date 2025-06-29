import React from "react";

function Eduction() {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-12 col-md-6 py-5 ">
          <img
            src="media/images/education.svg"
            className="img-fluid"
            style={{ width: "75%" }}
          />
        </div>

        <div className="col-12 col-md-6 py-5 text-md-start">
          <h2 style={{ color: "#424242" }}>Free and open market education</h2>
          <div className="mt-4" style={{ fontSize: "1.1em" }}>
            <p className="mb-4" style={{ color: "#424242" }}>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Varsity&nbsp;
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ color: "#387ed1" }}
              ></i>
            </a>
          </div>

          <div className="mt-5" style={{ fontSize: "1.1em" }}>
            <p className="mb-4" style={{ color: "#424242" }}>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              TradingQ&A&nbsp;
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ color: "#387ed1" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eduction;
