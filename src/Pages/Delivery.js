import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import TitleDelivery from "../components/Title/PageTitleDelivery";
import TextDelivery from "../components/Text/DeliveryText";
import "bootstrap/dist/css/bootstrap.min.css";

function Delivery() {
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
        <TitleDelivery />
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
        <TextDelivery />
      </div>
    </>
  );
}

export default Delivery;
