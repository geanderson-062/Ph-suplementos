import React, { Component } from "react";

export default class ProductQuantityText extends Component {
  render() {
    const { product } = this.props;

    let messageColor = "";
    let message = "";

    if (product.quantity >= 10) {
      message = `${product.quantity} unidades restantes`;
      messageColor = "green";
    } else if (product.quantity >= 2 && product.quantity <= 9) {
      message = `${product.quantity} unidades restantes`;
      messageColor = "orange";
    } else if (parseInt(product.quantity, 10) === 1) {
      message = "1 unidade restante";
      messageColor = "orange";
    } else if (parseInt(product.quantity, 10) === 0) {
      message = "FORA DE ESTOQUE";
      messageColor = "red";
    } else {
      message = `${product.quantity} unidades restantes`;
      messageColor = "red";
    }

    return (
      <p className="mb-0" style={{ color: messageColor }}>
        {message}
      </p>
    );
  }
}
