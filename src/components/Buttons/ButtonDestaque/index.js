import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Link
          to="/Destaques"
          className="btn btn-dark rounded-pill btn-lg"
          style={{
            width: 300,
            borderColor: "#024BB1",
            borderStyle: "solid",
            borderWidth: "3px",
          }}
          type="button"
        >
          Ver os destacados{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-return-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
            />
          </svg>
        </Link>
      </div>
    );
  }
}
