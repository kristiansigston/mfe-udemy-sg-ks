import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import MarketingApp from "../components/marketingApp";
// import AuthApp from "../components/authApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Progress from "../components/progress";
import Header from "../components/header";

const MarketingLazy = lazy(() => import("../components/MarketingApp"));
const AuthLazy = lazy(() => import("../components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy
                  onSignIn={() => {
                    setIsSignedIn(true);
                  }}
                />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
