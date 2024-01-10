import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import TitleDelivery from "../components/Title/PageTitleDelivery";
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

  return (
    <>
      <div className="title">
        <TitleDelivery />
      </div>
      <section className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className="text-muted text-justify px-3 px-md-0">
              Enviamos todos os produtos conforme a opção escolhida pelo
              cliente, em até 2 dias úteis após a confirmação do pagamento. O
              prazo de entrega varia de acordo com a modalidade de envio
              selecionada e não está sob nossa responsabilidade, pois a entrega
              é realizada pelos Correios.
              <br />
              <br />
              Assim que a encomenda for postada, você receberá um código de
              rastreamento para acompanhar o status da entrega através do site
              dos Correios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Delivery;
