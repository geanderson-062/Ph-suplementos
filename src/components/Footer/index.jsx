import React from "react";
//image footer
import ImgElo from "../../assets/ImgFooter/iconFooter/Elo.svg";

export default function index() {
  return (
    <div className="bg-dark text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-3">
            <h4 className="h6">Páginas</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://">Produtos</a>
              </li>
              <li>
                <a href="http://">Termo e condições</a>
              </li>

              <li>
                <a href="http://">Forma de Pagamento</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h4 className="h6">Páginas</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://">Destaques</a>
              </li>
              <li>
                <a href="http://">Contato</a>
              </li>

              <li>
                <a href="http://">Nossa Loja</a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4 className="h6 ">Formas de Pagamento</h4>
            <div className="container">
              <div className="row flex-column">
                <div className="col-md-4 mb-3">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <img
                        src="./assets/ImgFooter/iconFooter/Mastercard.svg"
                        alt="Mastercard"
                      />
                    </li>
                    <li>
                      <img
                        src="./assets/ImgFooter/iconFooter/Visa.svg"
                        alt="Visa"
                      />
                    </li>
                    <li>
                      <img
                        src="./assets/ImgFooter/iconFooter/Hypercard.svg"
                        alt="Hypercard"
                      />
                    </li>
                    <li>
                      <img
                        src="./assets/ImgFooter/iconFooter/Boleto.svg"
                        alt="Boleto"
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3 mt-md-n2">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <img src={0} alt="Mercado Pago" />
                    </li>
                    <li>
                      <img src={0} alt="PayPal" />
                    </li>
                    <li>
                      <img src={ImgElo} alt="Elo" />
                    </li>
                    <li>
                      <img src={0} alt="Pix" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
