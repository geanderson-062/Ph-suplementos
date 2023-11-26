import React from "react";
//components
import Header from "../components/Header";
import Card from "../components/Card";

function Estoque() {
  const productData = {
    productName: "CREATINA HARDCORE - INTEGRALMÉDICA",
    originalPrice: "R$ 90,00",
    discountPrice: "R$ 79,99",
    imageUrl:
      "https://d2vq4s943o8cb4.cloudfront.net/Custom/Content/Products/02/76/0276_creatina-hardcore-integralmedica-2312_m2_636668372702493590.png",
  };

  productData.installmentInfo = {
    text: `${productData.originalPrice} em até`,
    value: "3x de R$ 30,00",
  };

  return (
    <>
      <Header />
      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        Estoque
      </h1>

      <Card {...productData} />
    </>
  );
}

export default Estoque;
