import React from "react";
//components
import Header from "../components/Header";

import Card from "../components/Card";

import TitleEstoque from "../components/TItles/PageTitleEstoque";


function Estoque() {
  const productData = {
    productName: "CREATINA HARDCORE - INTEGRALMÉDICA",
    originalPrice: "90,00",
    discountPrice: "79,99",
    numberInstallments: "3",
    installmentPrice: "30,00",
    imageUrl:
      "https://d2vq4s943o8cb4.cloudfront.net/Custom/Content/Products/02/76/0276_creatina-hardcore-integralmedica-2312_m2_636668372702493590.png",
  };

  productData.installmentInfo = {
    text: `R$ ${productData.originalPrice} em até`,
    value: `${productData.numberInstallments}x de R$ ${productData.installmentPrice}`,
  };

  return (
    <>
      <Header />

      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        Estoque
      </h1>

      {/* to view the component Card remove the comments */}
      {/*<Card {...productData} />*/}

      <TitleEstoque />

    </>
  );
}

export default Estoque;
