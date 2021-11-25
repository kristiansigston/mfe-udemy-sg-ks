import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";
import MarketingMount from "../components/marketingApp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingMount />
      </div>
    </BrowserRouter>
  );
};
