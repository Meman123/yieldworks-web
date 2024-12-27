"use client"; // Forzamos que este componente sea exclusivamente del cliente

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieHeader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current, // Contenedor DOM
        renderer: "svg", // Renderizado SVG
        loop: true, // Animación en bucle
        autoplay: true, // Reproducción automática
        path: "/lottie-lego.json", // Archivo JSON desde `public`
      });

      return () => {
        animation.destroy(); // Limpia la animación
      };
    }
  }, []);

  return <div ref={containerRef} style={{ height: "300px", width: "300px" }} />;
}
