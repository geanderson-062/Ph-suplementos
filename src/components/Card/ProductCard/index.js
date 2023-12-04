import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./style.css";

const ProductCard = ({ product, index, Contato }) => {
  useEffect(() => {
    ScrollReveal().reveal(".product-card", {
      duration: 1000,
      origin: "left",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  const priceWithoutDiscount = parseFloat(
    product.priceWithoutDiscount.replace("$", "")
  );
  const discount = priceWithoutDiscount * 0.1; //(10%)
  const discountedPrice = priceWithoutDiscount - discount;
  return (
    <div key={index} className="col product-card">
      <div
        className="card zoom-card"
        style={{
          "@media (max-width: 767px)": {
            maxWidth: 280,
            marginLeft: "9%",
          },
        }}
      >
        <img
          src={product.imageSrc}
          className="card-img-top  img-fluid"
          alt={product.type}
        />
        <div className="card-body">
          <h5 className="card-title text-center fs-5">
            {product.type} de {product.description}
            <br />
            {product.productBrand}
          </h5>{" "}
          <br />
          <h6 className="card-title fs-6 text-black text-center mb-0">
            <p className="card-text font-weight-bold text-black ">
              <strong
                style={{ marginLeft: 5 }}
                className="text-success d-inline-50 fs-4"
              >
                ${discountedPrice.toFixed(2)}
              </strong>{" "}
              à vista
            </p>
            Ou
            <strong style={{ marginLeft: 5 }} className="card-text ">
              ${product.priceWithoutDiscount}
            </strong>
            <br />
            {product.installments}
          </h6>
        </div>
        <div className="d-flex justify-content-center" style={{ marginTop: 5 }}>
          <a
            {...Contato}
            className="btn btn-dark rounded-pill"
            style={{
              width: 200,
              marginBottom: 10,
              borderColor: "#024BB1",
              borderStyle: "solid",
              borderWidth: "3px",
            }}
            type="button"
          >
            Comprar
            <svg
              style={{ marginLeft: 5 }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
