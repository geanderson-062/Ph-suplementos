import React, { Component } from "react";

export default class SeuComponente extends Component {
  render() {
    const { product } = this.props;

    let messageColor = "";

    if (product.quantity > 10) {
      messageColor = "green"; // ou a classe CSS correspondente
    } else if (product.quantity < 6) {
      messageColor = "red"; // ou a classe CSS correspondente
    } else {
      messageColor = "orange"; // ou a classe CSS correspondente
    }

    return (
      <p style={{ color: messageColor }}>
        Restam: {product.quantity} unidades.
      </p>
    );
  }
}
