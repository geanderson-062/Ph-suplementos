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
              viewBox="0 0 16 16"
              className="text-white bi bi-list"
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
                    <li>
                      <div className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Estoque" className="dropdown-item">
                        Todo estoque
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
                    Promoções{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-currency-dollar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Destaques"
                    className="nav-link text-white fs-6"
                    aria-current="page"
                  >
                    Destaques{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                    </svg>
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
                    <svg
                      style={{ marginLeft: 5 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
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
