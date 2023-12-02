import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ProducsData from "../../../service/Products/Preworkout";
import MensageBuyService from "../../../service/MensageBuyService/MensageBuyService";
import ProductCard from "../ProductCard";

const ProductList = () => {
  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsData.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
