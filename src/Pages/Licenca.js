import React from "react";
//components
import Header from "../components/Header";
import TitleLicenca from "../components/TItles/PageTitleLicenca";

function Licenca() {
  return (
    <>
      <Header />

      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        Licença
      </h1>

      <TitleLicenca />

    </>
  );
}

export default Licenca;
