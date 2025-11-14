import React from "react";
import { FaUser, FaUsers, FaGlobe, FaChild, FaBuilding } from "react-icons/fa";

const accountTypes = [
  {
    icon: <FaUser size={22} color="#387ED1" />,
    title: "Individual Account",
    text: "Invest in equity, mutual funds and derivatives",
  },
  {
    icon: <FaUsers size={22} color="#387ED1" />,
    title: "HUF Account",
    text: "Make tax-efficient investments for your family",
  },
  {
    icon: <FaGlobe size={22} color="#387ED1" />,
    title: "NRI Account",
    text: "Invest in equity, mutual funds, debentures, and more",
  },
  {
    icon: <FaChild size={22} color="#387ED1" />,
    title: "Minor Account",
    text: "Teach your little ones about money & invest for their future with them",
  },
  {
    icon: <FaBuilding size={22} color="#387ED1" />,
    title: "Corporate / LLP / Partnership",
    text: "Manage your business surplus and investments easily",
  },
];

function AccountTypes() {
  return (
    <div className="container py-5">
      <h2
        className="text-center fw-semibold mb-5"
        style={{ color: "#424242", fontSize: "1.6rem" }}
      >
        Explore different account types
      </h2>

      <div className="row justify-content-center">
        {accountTypes.map((acc, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
          >
            <div
              className="card p-4 shadow-sm border rounded-3 account-card"
              style={{
                width: "100%",
                maxWidth: "380px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  className="icon-circle d-flex justify-content-center align-items-center me-3"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(56, 126, 209, 0.1)",
                  }}
                >
                  {acc.icon}
                </div>
                <h3
                  className="mb-0 "
                  style={{
                    color: "#444",
                    fontSize: "1.25rem",
                    fontWeight: "500",
                  }}
                >
                  {acc.title}
                </h3>
              </div>
              <p
                className="mb-0"
                style={{
                  color: "#666666",
                }}
              >
                {acc.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .account-card:hover {
            border-color: #387ED1 !important;
            box-shadow: 0 4px 12px rgba(56, 126, 209, 0.2) !important;
          }
        `}
      </style>
    </div>
  );
}

export default AccountTypes;
