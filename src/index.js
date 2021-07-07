import React from "react";
import ReactDOM from "react-dom";
import { NavbarComp } from "./NavbarComp";
import ContentComp from "./ContentComp";
import { FooterComp } from "./FooterComp";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <NavbarComp />
      <ContentComp />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
