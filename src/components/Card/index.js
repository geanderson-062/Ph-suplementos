import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ProducsData from "../../service/Estoque";

const ProductList = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4" style={{ marginTop: 50 }}>
      {ProducsData.map((product, index) => (
        <div key={index} class="col">
          <div class="card">
            <img
              src={product.imageSrc}
              className="card-img-top zoom-image"
              alt={product.title}
            />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p className="card-text text-decoration-line-through text-black-50 mb-0">
                R$ {product.priceWithoutDiscount}
              </p>
              <p className="card-text font-weight-bold d-inline text-black-50">
                <strong className="text-success d-inline">
                  R$ {product.discountPrice}
                </strong>{" "}
                à vista
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
