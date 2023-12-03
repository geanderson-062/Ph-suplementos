import React, { useState, useEffect } from "react";

// import css
import "./style.css";

// ico
import icoMastercard from "../../assets/ImgFooter/iconFooter/Mastercard.svg";
import icoVisa from "../../assets/ImgFooter/iconFooter/Visa.svg";
import icoHipercard from "../../assets/ImgFooter/iconFooter/Hipercard.svg";
import icoBoleto from "../../assets/ImgFooter/iconFooter/Boleto.svg";
import icoMercadoPago from "../../assets/ImgFooter/iconFooter/MercadoPago.svg";
import icoPaypal from "../../assets/ImgFooter/iconFooter/Paypal.svg";
import icoElo from "../../assets/ImgFooter/iconFooter/Elo.svg";
import icoPix from "../../assets/ImgFooter/iconFooter/Pix.svg";
import logoFooter from "../../assets/ImgFooter/logoFooter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isBigScreenAt990, setIsBigScreenAt990] = useState(
    window.innerWidth > 990
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreenAt990(window.innerWidth > 990);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo no início */}
          <div className="col-md-2 mt-2">
            <img
              src={logoFooter}
              alt="Ph Suplementos"
              style={{ maxWidth: "100%" }}
            />
          </div>

          {/* Páginas */}
          <div className="col-md-2 text-center">
            <h4 className="h6">Páginas</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://" style={{ fontSize: "14px" }}>
                  Produtos
                </a>
              </li>
              <li>
                <a href="http://" style={{ fontSize: "14px" }}>
                  Termos e condições
                </a>
              </li>
              <li>
                <a href="http://" style={{ fontSize: "14px" }}>
                  Forma de Pagamento
                </a>
              </li>
            </ul>
          </div>

          {/* Páginas */}
          <div className="col-md-3 text-center">
            <h4 className="h6 mb-1">Páginas</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://" style={{ fontSize: "14px" }}>
                  Destaques
                </a>
              </li>
              <li>
                <a href="http://" style={{ fontSize: "14px" }}>
                  Contato
                </a>
              </li>
              <li>
                <a href="http://" style={{ fontSize: "14px" }}>
                  Nossa Loja
                </a>
              </li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div className="col-md-3">
            <h4 className="h6 mb-1">Formas de Pagamento</h4>
            <div className="payment-icon-bg d-flex justify-content-center align-items-center">
              <div className="row flex-column">
                <div className="col-md-4 mb-0">
                  <ul className="list-unstyled d-flex mb-0 mt-3">
                    <li>
                      <img
                        className="ico"
                        src={icoMastercard}
                        alt="Mastercard"
                      />
                    </li>
                    <li>
                      <img className="ico" src={icoVisa} alt="Visa" />
                    </li>
                    <li>
                      <img className="ico" src={icoHipercard} alt="Hipercard" />
                    </li>
                    <li>
                      <img className="ico" src={icoBoleto} alt="Boleto" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3 mt-md-n1">
                  <ul className="list-unstyled d-flex mb-0">
                    <li>
                      <img src={icoMercadoPago} alt="Mercado Pago" />
                    </li>
                    <li>
                      <img className="ico" src={icoPaypal} alt="PayPal" />
                    </li>
                    <li>
                      <img className="ico" src={icoElo} alt="Elo" />
                    </li>
                    <li>
                      <img className="ico" src={icoPix} alt="Pix" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Logo após Formas de Pagamento */}
          {isBigScreenAt990 && (
            <div className="col-md-2 mt-2">
              <img
                src={logoFooter}
                alt="Ph Suplementos"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>

        <div className="row border-bottom my-3"></div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              &copy; {currentYear} PH Suplementos - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
