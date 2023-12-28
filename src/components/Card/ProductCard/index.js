import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ProductQuantity from "../../Text/ProductQuantityText";
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
    <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
      <div
        className={`card zoom-card mx-auto d-flex flex-column justify-content-between position-relative ${
          parseInt(product.quantity, 10) === 0 ? "out-of-stock" : ""
        }`}
        style={{ maxWidth: "250px", maxHeight: "500px" }}
      >
        {parseInt(product.quantity, 10) === 0 && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ background: "rgba(255, 255, 255, 0.8)" }}
          >
            <span
              className="text-danger"
              style={{
                fontSize: 20,
                fontWeight: "bold",
                transform: "rotate(-45deg)",
              }}
            >
              ESGOTADO
            </span>
          </div>
        )}
        <img
          src={product.imageSrc}
          className="card-img-top img-fluid mx-auto"
          alt={product.type}
          style={{ width: "160px", height: "160px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title mb-2">
            {product.type}
            <br />
            <span className="small">{product.description}</span>
            <br />
            <span className="text-muted small">{product.productBrand}</span>
          </h5>
          <div className="d-flex flex-md-row justify-content-between border-top pt-2">
            <div className="col-md-6 d-flex flex-column align-items-start line-height">
              <p className="card-text text-black-50 mb-0">
                R$ {product.priceWithoutDiscount}
              </p>
              <p
                className="card-text font-weight-bold d-inline text-black-50"
                style={{ whiteSpace: "nowrap" }}
              >
                <strong className="text-success d-inline small">
                  R$ {discountedPrice.toFixed(2)} à vista
                </strong>
              </p>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-end">
              <div className="installmentPrice text-end line-height">
                <p className="card-text">
                  <span>{product.installments}</span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ marginTop: 15 }}
          >
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
              disabled={parseInt(product.quantity, 10) === 0}
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
          <div className="text-center">
            <ProductQuantity product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
