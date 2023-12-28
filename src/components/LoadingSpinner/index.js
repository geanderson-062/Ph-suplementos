import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncRequest = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
      } catch (error) {
        console.error("Erro durante o carregamento:", error);
        setLoading(false);
      }
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
        backgroundColor: loading ? "rgba(0, 0, 0, 0.7)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "background-color 0.5s",
        pointerEvents: loading ? "all" : "none",
      }}
    >
      {loading && (
        <div>
          <RingLoader loading={loading} color="#fff" size={150} />
          <p className="fs-3 text-white" style={{ marginTop: 30 }}>
            Carregando...
          </p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
