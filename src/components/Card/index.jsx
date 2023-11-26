import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Card = ({
  productName,
  originalPrice,
  discountPrice,
  imageUrl,
  installmentInfo,
}) => {
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top zoom-image"
          alt={productName}
        />
        <div className="card-body">
          <h5 className="card-title pb-3 mb-0">{productName}</h5>
          <div className="d-flex flex-md-row justify-content-between border-top pt-3">
            <div className="col-md-6 d-flex flex-column align-items-start line-height">
              <p className="card-text text-decoration-line-through text-black-50 mb-0">
                R$ {originalPrice}
              </p>
              <p className="card-text font-weight-bold d-inline text-black-50">
                <strong className="text-success d-inline">
                  R$ {discountPrice}
                </strong>{" "}
                à vista
              </p>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-end">
              <div className="installmentPrice text-end line-height">
                <p className="card-text">
                  <span>{installmentInfo.text}</span>
                  <br />
                  <span>{installmentInfo.value}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
