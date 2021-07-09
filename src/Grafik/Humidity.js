import { Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";

// Data generation
/*function getRandomNumber() {
  // Create random array of objects
  return Math.round(20 + 80 * Math.random());
}*/

class Humidity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [0],
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
        labels: ["Humidity"],
      },
    };
  }

  componentDidMount() {
    //Set update interval
    window.setInterval(() => {

      fetch('http://www.smartmonitoring.somee.com/api/Data/GetLastData')
            .then(res => res.json())
            .then(resJson => {
              this.setState({ series: [parseInt(Math.round(resJson[0].humidity, 0))] });
            }).catch(e => 
                {
                    console.log('Error : ' + e);
                });

      /*console.log("Refresh");
      
      fetch("http://www.smartmonitoring.somee.com/api/Data/GetLastData")
        .then((res) => res.json())
        .then((resJson) => {
          this.setState({ series: resJson.humidity });
        })
        .catch((e) => {
          console.log("Error : " + e);
        });*/

      /*this.setState({
        series: [getRandomNumber()],
      });*/
    }, 3000);
  }

  render() {
    return (
      <Card>
        <Card.Header>Humidity</Card.Header>
        <Card.Body>
          <div className="app">
            <div className="row">
              <div id="chart2">
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

export default Humidity;
