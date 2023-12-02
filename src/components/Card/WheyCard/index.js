import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ProducsData from "../../../service/Products/Whey";

const ProductList = () => {
  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsData.map((product, index) => {
        const Contato = {
          href: `https://api.whatsapp.com/send?phone=5581992628016&text=Olá quero comprar ${product.type} de ${product.description} da ${product.productBrand} que está por ${product.priceWithoutDiscount} e ${product.discountPrice} á vista`,
          target: "_blank",
        };

        return (
          <div key={index} className="col">
            <div className="card">
              <img
                src={product.imageSrc}
                className="card-img-top zoom-image"
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
                  Valor total:
                  <strong
                    style={{ marginLeft: 5 }}
                    className="card-text text-decoration-line-through"
                  >
                    {product.priceWithoutDiscount}
                  </strong>
                  <p className="card-text font-weight-bold text-black">
                    Valor à vista:
                    <strong
                      style={{ marginLeft: 5 }}
                      className="text-success d-inline-50"
                    >
                      {product.discountPrice}
                    </strong>{" "}
                  </p>
                </h6>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginTop: 5 }}
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
      })}
    </div>
  );
};

export default ProductList;
