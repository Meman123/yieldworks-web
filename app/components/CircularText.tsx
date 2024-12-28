"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CircularTextProps {
  /**
   * Texto a dibujar en el círculo
   */
  text?: string;
  /**
   * Radio del círculo, en pixeles.
   * El contenedor será 2*radius x 2*radius
   */
  radius?: number;
  /**
   * Duración (en segundos) para el giro completo.
   */
  duration?: number;
  /**
   * Sentido de la rotación:
   *  "clockwise" => sentido horario
   *  "counterclockwise" => sentido antihorario
   */
  direction?: "clockwise" | "counterclockwise";
  /**
   * Si true, las letras mantienen orientación hacia el usuario;
   * si false, giran con el contenedor.
   */
  keepOrientation?: boolean;
  /**
   * Tamaño de la fuente, ej. "1.5rem", "20px"
   */
  fontSize?: string;
  /**
   * Color de la fuente, ej. "white", "#ff0000"
   */
  color?: string;
  /**
   * Tipo de fuente, ej. "sans-serif", "Roboto"
   */
  fontFamily?: string;
}

export default function CircularTextCentered({
  text = "COMING SOON TO YIELDWORKS",
  radius = 100,
  duration = 10,
  direction = "clockwise",
  keepOrientation = true,
  fontSize = "1.2rem",
  color = "white",
  fontFamily = "sans-serif",
}: CircularTextProps) {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = circleRef.current;
    if (!container) return;

    // Limpiamos y forzamos el punto de rotación en el centro
    container.innerHTML = "";
    container.style.transformOrigin = "50% 50%";

    // Separamos el texto en un array de letras
    const lettersArray = text.split("");
    const letters: HTMLSpanElement[] = [];

    // 1) Primera pasada: crear spans ocultos para medir su tamaño
    lettersArray.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;

      // Posicionamiento inicial (temporal)
      span.style.position = "absolute";
      span.style.visibility = "hidden";
      span.style.left = "0px";
      span.style.top = "0px";

      // Opcionales para uniformar
      span.style.display = "inline-block";
      span.style.lineHeight = "1";

      // Estilos de tipografía (de las props)
      span.style.fontSize = fontSize;
      span.style.color = color;
      span.style.fontFamily = fontFamily;

      container.appendChild(span);
      letters.push(span);
    });

    // 2) requestAnimationFrame para asegurarnos que el DOM calcule tamaño
    requestAnimationFrame(() => {
      // 3) Medir y posicionar centrado
      letters.forEach((span, i) => {
        const angle = (360 / lettersArray.length) * i;
        const rad = (angle * Math.PI) / 180;

        // Cálculo de coordenadas teóricas
        const circleX = radius * Math.cos(rad);
        const circleY = radius * Math.sin(rad);

        // Medir el span
        const rect = span.getBoundingClientRect();
        const letterWidth = rect.width;
        const letterHeight = rect.height;

        // Calcular posición para que el CENTRO de la letra quede en la circunferencia
        const centerX = Math.round(radius + circleX - letterWidth / 2);
        const centerY = Math.round(radius + circleY - letterHeight / 2);

        span.style.left = `${centerX}px`;
        span.style.top = `${centerY}px`;

        // Hacer visible
        span.style.visibility = "visible";
      });

      // 4) Animar con GSAP
      const rotationValue = direction === "clockwise" ? 360 : -360;
      const tween = gsap.to(container, {
        rotation: rotationValue,
        duration,
        repeat: -1,
        ease: "linear",
        onUpdate: () => {
          // Compensación para que las letras no giren sobre sí mismas
          if (keepOrientation) {
            const currentRotation = gsap.getProperty(container, "rotation") as number;
            letters.forEach((span) => {
              span.style.transform = `rotate(${-currentRotation}deg)`;
            });
          }
        },
      });

      // Limpieza al terminar
      return () => {
        tween.kill();
      };
    });

    // Limpieza si cambian las props
    return () => {
      container.innerHTML = "";
    };
  }, [text, radius, duration, direction, keepOrientation, fontSize, color, fontFamily]);

  // Contenedor 2*radius x 2*radius
  return (
    <div
      ref={circleRef}
      style={{
        position: "relative",
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        transformOrigin: "50% 50%",
      }}
    />
  );
}
