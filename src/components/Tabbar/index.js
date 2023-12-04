/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <marquee direction="left">
          <h6 className="fs-6 text-white">
            Ph Suplementos: Elevando o seu potencial com suplementos premium de
            alta qualidade. Entrega gratuita em Gravatá, de segunda a sexta, em
            horário comercial.{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-truck"
              viewBox="0 0 16 16"
              style={{ marginLeft: 5 }}
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
          </h6>
        </marquee>
      </div>
    );
  }
}
