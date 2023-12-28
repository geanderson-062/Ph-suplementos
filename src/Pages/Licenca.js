import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//components
import TitleLicenca from "../components/TItles/PageTitleLicenca";
import TextLicenca from "../components/Text/licenca";

function Licenca() {
  useEffect(() => {
    ScrollReveal().reveal(".title", {
      duration: 1000,
      origin: "right",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(".text", {
      duration: 1000,
      origin: "left",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <div className="title">
        <TitleLicenca />
      </div>
      <div
        className="text"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30%",
          marginTop: "3%",
        }}
      >
        <TextLicenca />
      </div>
    </>
  );
}

export default Licenca;
