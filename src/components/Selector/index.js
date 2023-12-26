/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
//card component
import ProductCard from "../Card/ProductCard";
//titles
import TitleCreatina from "../TItles/PageTitleCreatina";
import TitleHypercaloric from "../TItles/PageTitleHypercaloric";
import TitlePreworkout from "../TItles/PageTitlePreworkout";
import TitleTermogenico from "../TItles/PageTitleTermogenico";
import TitleWhey from "../TItles/PageTitleWhey";
//services
import MensageBuyService from "../../service/MensageBuyService/MensageBuyService";
import ProducsDataAll from "../../service/ProductsAllService";
import ProducsDataWhey from "../../service/Products/Whey";
import ProducsDataCreatina from "../../service/Products/Creatina";
import ProducsDataHypercaloric from "../../service/Products/Hypercaloric";
import ProducsDataPreworkout from "../../service/Products/Preworkout";
import ProducsDataTermogenico from "../../service/Products/Termogenico";

const ComponentAllProducts = () => (
  <section className="container">
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsDataAll.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  </section>
);

const ComponentCreatina = () => (
  <section className="container">
    <TitleCreatina />
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsDataCreatina.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  </section>
);

const ComponentWhey = () => (
  <section className="container">
    <TitleWhey />
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsDataWhey.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  </section>
);

const ComponentPreworkout = () => (
  <section className="container">
    <TitlePreworkout />
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsDataPreworkout.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  </section>
);

const ComponentHypercaloric = () => (
  <section className="container">
    <TitleHypercaloric />
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsDataHypercaloric.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  </section>
);

const ComponentTermogenico = () => (
  <section className="container">
    <TitleTermogenico />
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
    >
      {ProducsDataTermogenico.map((product, index) => {
        const Contato = MensageBuyService(product);

        return (
          <ProductCard
            key={index}
            product={product}
            index={index}
            Contato={Contato}
          />
        );
      })}
    </div>
  </section>
);

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Filtrar");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedComponent = () => {
    const components = {
      Todos: <ComponentAllProducts />,
      Creatina: <ComponentCreatina />,
      Whey: <ComponentWhey />,
      Preworkout: <ComponentPreworkout />,
      Hypercaloric: <ComponentHypercaloric />,
      Termogenico: <ComponentTermogenico />,
    };

    return components[selectedOption] || <ComponentAllProducts />;
  };

  return (
    <div>
      <div className="btn-group" style={{ marginLeft: "7%" }}>
        <button
          type="button"
          className="btn btn-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-white bi bi-list"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          {selectedOption}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick("Todos")}
            >
              Todos produtos
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick("Creatina")}
            >
              Creatina
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick("Whey")}
            >
              Whey Protein
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick("Preworkout")}
            >
              Pré-treinos
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick("Hypercaloric")}
            >
              Hypercalóricos
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick("Termogenico")}
            >
              Termogênicos
            </a>
          </li>
        </ul>
      </div>

      <div className="selected-component">{renderSelectedComponent()}</div>
    </div>
  );
};

export default MyDropdown;
