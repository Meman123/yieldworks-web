"use client";

import React, { FC } from "react";

interface BackgroundVideoProps {
  /**
   * Ruta del video (por ejemplo "/videos/mi-video.mov")
   */
  src: string;
}

/**
 * Muestra un video a pantalla completa como background, en loop y sin sonido
 */
const BackgroundVideo: FC<BackgroundVideoProps> = ({ src }) => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BackgroundVideo;
