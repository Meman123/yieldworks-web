"use client"; 
import React, { FC } from "react";

interface CenteredLogoProps {
  /**
   * URL o path de la imagen (logo)
   */
  src: string;
  /**
   * Texto alternativo (atributo alt) para accesibilidad
   */
  alt?: string;
  /**
   * Ancho de la imagen, por ejemplo "150px", "10rem", etc.
   */
  width?: string;
  /**
   * Alto de la imagen
   */
  height?: string;
}

/**
 * Componente que muestra una imagen centrada en la pantalla
 */
const CenteredLogo: FC<CenteredLogoProps> = ({
  src,
  alt = "Logo",
  width = "150px",
  height = "150px",
}) => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        // Aseguramos que ocupe toda la pantalla para centrar vertical
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default CenteredLogo;
