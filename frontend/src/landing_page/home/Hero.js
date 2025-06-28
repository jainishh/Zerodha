import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <img
            src="media/images/homeHero.png"
            alt="Hero Img"
            className="img-fluid"
          />
        </div>
        <div className="col-12 mt-4">
          <h1>Invest in everything</h1>
          <p className="mt-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-primary fs-5 px-4 py-2 ">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
