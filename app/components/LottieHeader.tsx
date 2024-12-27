"use client";

import lottie from "lottie-web";
import { useEffect, useState } from "react";

export default function LottieHeader() {
  const [animationContainer, setAnimationContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer) {
      try {
        const animationData = require("../../public/lottie-lego.json");
        console.log("Datos del JSON:", animationData);

        if (!animationData || !animationData.layers || animationData.layers.length === 0) {
          console.error("El archivo JSON de Lottie no es válido.");
          return;
        }

        const animation = lottie.loadAnimation({
          container: animationContainer,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData,
        });

        return () => {
          animation.destroy();
        };
      } catch (error) {
        console.error("Error al cargar la animación:", error);
      }
    }
  }, [animationContainer]);

  return (
    <div
      ref={setAnimationContainer}
      style={{ width: "100%", height: "100%" }}
      aria-label="Lottie Animation"
    />
  );
}
