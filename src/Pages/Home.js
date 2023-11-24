// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Destaques">Destaques</Link>
          </li>
          <li>
            <Link to="/Estoque">Estoque</Link>
          </li>
          <li>
            <Link to="/Promocao">Promocao</Link>
          </li>
          <li>
            <Link to="/Licenca">Licenca</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <h1>Page Home</h1>
    </>
  );
}

export default Home;
