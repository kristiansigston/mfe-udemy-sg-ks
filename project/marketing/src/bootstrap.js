import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// mount function to start app

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if dev and isolation s
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// we are running thorugh container
// export mount fubction

export { mount };
