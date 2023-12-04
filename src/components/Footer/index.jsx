import React from "react";

import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-dark text-white">
      <div className="container py-3">
        <div className="row d-flex">
          <div className="col-12 text-center">
            <ul className="text justify-content-center border-bottom pb-3 mb-3">
              <li className="list-inline-item px-2">
                <a className="nav-link" href="/">
                  Produto
                </a>
              </li>
              <li className="list-inline-item px-2">
                <a className="nav-link" href="/">
                  Entrega
                </a>
              </li>
              <li className="list-inline-item px-2">
                <a className="nav-link" href="/">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              &copy; {currentYear} PH Suplementos -{" "}
              <a href="/" className="text-white text-hover">
                Todos os direitos reservados
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
