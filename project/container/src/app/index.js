import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";
import MarketingMount from "../components/marketingApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingMount />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
