import React, { Component } from "react";
import { Table } from "react-bootstrap";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const $ = require('jquery')
$.Datatable = require('datatables.net')

class Tabel extends Component {

  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el)
    this.$el.DataTable(
        {
            data: this.props.data,
            columns: [
                {title:"Name"},
                {title:"Position"},
                {title:"Office"},
                {title:"Extn."},
                {title:"Start date"},
                {title:"Salary"},
            ]
        }
    )
}

componentWillMount() {

}

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "Product1",
          price: 120,
        },
        {
          id: 2,
          name: "Product2",
          price: 80,
        },
        {
          id: 3,
          name: "Product2",
          price: 80,
        },
        {
          id: 4,
          name: "Product2",
          price: 80,
        },
        {
          id: 5,
          name: "Product2",
          price: 80,
        },
        {
          id: 6,
          name: "Product2",
          price: 80,
        },
        {
          id: 7,
          name: "Product2",
          price: 80,
        },
        {
          id: 8,
          name: "Product2",
          price: 80,
        },
        {
          id: 9,
          name: "Product2",
          price: 80,
        },
        {
          id: 10,
          name: "Product2",
          price: 80,
        },
        {
          id: 11,
          name: "Product2",
          price: 80,
        },
        {
          id: 12,
          name: "Product2",
          price: 80,
        },
        {
          id: 13,
          name: "Product2",
          price: 80,
        },
        {
          id: 14,
          name: "Product2",
          price: 80,
        },
        {
          id: 15,
          name: "Product2",
          price: 80,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <table className="display" width="100%" ref={el => this.el = el} ></table>
      </div>
    );
  }
}

export default Tabel;
