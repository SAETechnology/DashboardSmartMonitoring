import { Card, Button, Alert } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";
import Temperature from "./Grafik/Temperature";
import Humidity from "./Grafik/Humidity";
import SoilMoisture from "./Grafik/SoilMoisture";

class ContentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <body class="d-flex flex-column min-vh-100">
        <div class="wrapper">
          <div class="container mt-5">
            <div class="row">
              <div class="col-md-4">
                <Temperature />
              </div>

              <div class="col-md-4">
                <Humidity />
              </div>

              <div class="col-md-4">
                <SoilMoisture />
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <Alert variant="success">
                  <Alert.Heading>Status : Aman</Alert.Heading>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default ContentComp;
