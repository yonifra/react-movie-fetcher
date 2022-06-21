import React from "react";
import { render } from "react-dom";
import InitialComponent from "./InitialComponent";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <InitialComponent />
  </div>
);

render(<App />, document.getElementById("root"));
