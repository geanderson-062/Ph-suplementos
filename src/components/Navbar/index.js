import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ImgHeader from "../../assets/ImgHeader/LogoHeader.png";

function Header() {
  const Contato = {
    href: "https://api.whatsapp.com/send?phone=5581992628016&text=Olá Ph-suplementos precisamos conversar.",
    target: "_blank",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg PrimaryColor">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-4 text-white">
            <img src={ImgHeader} alt="Bootstrap" width="40" height="40"></img>
            Ph Suplementos
          </Link>
          <button
            className="navbar-toggler PrimaryColor"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{
              borderColor: "#024BB1",
              borderStyle: "solid",
              borderWidth: "2px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              clasName="bi bi-list"
              viewBox="0 0 16 16"
              className="text-white"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end PrimaryColor"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-white"
                id="offcanvasNavbarLabel"
              >
                <img
                  src={ImgHeader}
                  alt="Bootstrap"
                  width="40"
                  height="40"
                ></img>
                Ph Suplementos
              </h5>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{
                  borderColor: "#024BB1",
                  borderStyle: "solid",
                  borderWidth: "3px",
                }}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white changeColorOnHover fs-6"
                    href="0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Suplementos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Whey" className="dropdown-item">
                        Whey Protein
                      </Link>
                    </li>
                    <li>
                      <Link to="/Creatina" className="dropdown-item">
                        Creatinas
                      </Link>
                    </li>
                    <li>
                      <Link to="/Hypercaloric" className="dropdown-item">
                        Hypercalóricos
                      </Link>
                    </li>
                    <li>
                      <Link to="/Termogenico" className="dropdown-item">
                        Termogênicos
                      </Link>
                    </li>
                    <li>
                      <Link to="/Preworkout" className="dropdown-item">
                        Pré-treinos
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Promocao"
                    className="nav-link text-white fs-6"
                    aria-current="page"
                  >
                    Promoções
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Destaques"
                    className="nav-link text-white fs-6"
                    aria-current="page"
                  >
                    Destaques
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Estoque"
                    className="nav-link text-white fs-6"
                    aria-current="page"
                    href="0"
                  >
                    Nosso estoque
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-6" {...Contato}>
                    Contato
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone text-white"
                      viewBox="0 0 16 16"
                      style={{ marginLeft: 5 }}
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
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
