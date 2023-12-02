import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Link
          to="/Promocao"
          className="btn btn-dark rounded-pill btn-lg"
          style={{ width: 300 }}
          type="button"
        >
          Ver todas promoções
        </Link>
      </div>
    );
  }
}
