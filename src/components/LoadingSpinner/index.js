import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import imagesLoaded from "imagesloaded";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startLoadingTime = new Date().getTime();

    const fakeAsyncRequest = async () => {
      const images = document.querySelectorAll("img");

      imagesLoaded(images, { background: true }, async () => {
        const endLoadingTime = new Date().getTime();
        const loadingTime = endLoadingTime - startLoadingTime;

        try {
          await new Promise((resolve) => setTimeout(resolve, loadingTime));
          setLoading(false);
        } catch (error) {
          console.error("Erro durante o carregamento:", error);
          setLoading(false);
        }
      });
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
        backgroundColor: loading ? "rgba(0, 0, 0, 0.9)" : "transparent",
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
