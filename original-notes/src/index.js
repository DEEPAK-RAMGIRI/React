//1. Creating a new React app.
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

//2. Creating a App.jsx component, Header.jsx component that renders a <header> element to show the Keeper App name in an <h1>.
//3. Creating a Footer.jsx component that renders a <footer> element which contains copyright

ReactDom.render(<App />, document.getElementById("root"));
