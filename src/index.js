import React from "react";
import ReactDOM from "react-dom";
import NavbarComp from "./NavbarComp";
import ContentComp from "./ContentComp";
import "./assets/scss/mdb-free.scss"
import './assets/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
    <NavbarComp />
    <body className="d-flex flex-column min-vh-100">
      <ContentComp />
    </body>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
