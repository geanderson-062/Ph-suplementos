import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ProducsData from "../../../service/SeparatePage/Promocao";
import ProductCard from "../ProductCard";

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
