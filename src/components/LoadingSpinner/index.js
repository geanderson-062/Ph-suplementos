import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncRequest = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    fakeAsyncRequest();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: loading ? "#000" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "background-color 0.5s",
      }}
    >
      <div>
        <RingLoader loading={loading} color="#fff" size={150} />
        {loading && (
          <p className="fs-3 text-white" style={{ marginTop: 30 }}>
            Carregando...
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
