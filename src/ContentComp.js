import { Alert } from "react-bootstrap";
import React, { Component } from "react";
import Temperature from "./Grafik/Temperature";
import Humidity from "./Grafik/Humidity";
import SoilMoisture from "./Grafik/SoilMoisture";
import Tabel from "./Tabel/Tabel";

class ContentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusData:''
    };
  }

  componentDidMount() { //Set update interval
    window.setInterval(() => {

      fetch('http://www.smartmonitoring.somee.com/api/Data/GetLastData')
            .then(res => res.json())
            .then(resJson => {
              this.setState({ statusData: resJson[0].status });
            }).catch(e => 
                {
                    console.log('Error : ' + e);
                });

      /*fetch("http://www.smartmonitoring.somee.com/api/Data/GetLastData")
        .then((res) => res.json())
        .then((resJson) => {
          this.setState({ series: resJson.soilMoisture });
        })
        .catch((e) => {
          console.log("Error : " + e);
        });*/
        
      /*this.setState({
        series: [getRandomNumber()]
      })*/
    }, 3000)
  }

  render() {
    return (      
      
        <div className="wrapper">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <Temperature />
              </div>

              <div className="col-md-4">
                <Humidity />
              </div>

              <div className="col-md-4">
                <SoilMoisture />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <Alert variant="success">
                  <Alert.Heading>{ this.state.statusData }</Alert.Heading>
                </Alert>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <Tabel />
              </div>
            </div>

          </div>
        </div>
    );
  }
}

export default ContentComp;
