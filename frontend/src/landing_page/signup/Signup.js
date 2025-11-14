import React from "react";

import TradingAccount from "./TradingAccount";
import InvestmentOptions from "./InvestmentOptions";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import FAQs from "./FAQs";
import OpenAccount from "../OpenAccount";

function Signup() {
  return (
    <>
      <TradingAccount />
      <InvestmentOptions />
      <Steps />
      <Benefits />
      <AccountTypes />
      <FAQs />
      <OpenAccount />
    </>
  );
}

export default Signup;
