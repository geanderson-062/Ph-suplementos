import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center" style={{ marginTop: 30 }}>
        <Link
          to="/MaisVendido"
          className="btn btn-dark rounded-pill"
          style={{ width: 300 }}
          type="button"
        >
          Ver os mais vendidos
        </Link>
      </div>
    );
  }
}
