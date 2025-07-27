import React from "react";
import "./LeftSection.css";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-md-7 col-12 p-3">
          <div style={{ paddingLeft: "10%" }}>
            <img src={imageURL} className="img-fluid"></img>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div
            class="justify-content-center infodiv"
            style={{
              paddingTop: "10%",
              paddingRight: "20%",
              paddingLeft: "10%",
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
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginRight: "50px",
                }}
              >
                Try Demo&nbsp;
                <i
                  class="fa-solid fa-arrow-right-long"
                  style={{ color: "#387ed1" }}
                ></i>
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Learn More&nbsp;
                <i
                  class="fa-solid fa-arrow-right-long"
                  style={{ color: "#387ed1" }}
                ></i>
              </a>
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <a
                href={googlePlay}
                style={{
                  marginRight: "20px",
                }}
              >
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
              </a>

              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
