import { Card, Button, Alert } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";

function getRandomNumber() {
    // Create random array of objects
    return Math.round(20 + 80 * Math.random())
    
}

class SoilMoisture extends Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [getRandomNumber()],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "16px",
                fontFamily: undefined,
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "14px",
                fontFamily: undefined,
                fontWeight: 400,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        labels: ["Soil Moisture"],
      },
    };
  }

  componentDidMount() { //Set update interval
    window.setInterval(() => {
      this.setState({
        series: [getRandomNumber()]
      })
    }, 5000)
  }

  render() {
    return (
      <Card>
        <Card.Header>Soil Moisture</Card.Header>
        <Card.Body>
          <div className="app">
            <div className="row">
              <div id="chart3">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="radialBar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SoilMoisture;