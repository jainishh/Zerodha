import React from "react";
import "./LeftSection.css";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-md-5 col-12 order-2 order-md-1">
          <div
            className="justify-content-center infodiv"
            style={{
              paddingTop: "10%",
              paddingRight: "10%",
              paddingLeft: "20%",
              lineHeight: 1.8,
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#424242",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              {productName}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#424242",
                marginBottom: "20px",
              }}
            >
              {productDescription}
            </p>

            <div>
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginRight: "50px",
                }}
              >
                learnMore&nbsp;
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "#387ed1" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-12 p-3 order-1 order-md-2">
          <div style={{ paddingLeft: "10%" }}>
            <img src={imageURL} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
