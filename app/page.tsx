"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Cargar GSAP manualmente
    const script = document.createElement("script");
    script.src = "./js/gsap/gsap.min.js"; // Ruta del archivo
    script.async = true;
    document.body.appendChild(script);

    const scrollTrigger = document.createElement("script");
    scrollTrigger.src = "./js/gsap/ScrollTrigger.min.js"; // Ruta del plugin
    scrollTrigger.async = true;
    document.body.appendChild(scrollTrigger);

    // Inicializar GSAP una vez que los scripts se hayan cargado
    script.onload = () => {
      if (window.gsap) {
        window.gsap.to(".box", { duration: 2, x: 300 });
      }
    };
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#3498db",
        }}
      ></div>
    </main>
  );
}
