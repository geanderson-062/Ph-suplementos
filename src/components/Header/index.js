import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-4" href="0">
            Ph Suplementos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Ph Suplementos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/Promocao" className="nav-link" aria-current="page">
                    Promoções
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Destaques"
                    className="nav-link"
                    aria-current="page"
                  >
                    Destaques
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Suplementos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="0">
                        Whey
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="0">
                        Creatina
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="0">
                        Colageno
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="0">
                        Termogênicos
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Estoque"
                    className="nav-link"
                    aria-current="page"
                    href="0"
                  >
                    Nosso estoque
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="0">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
