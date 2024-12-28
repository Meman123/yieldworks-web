"use client"; // Necesario para usar hooks como useEffect

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComingSoon() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animar título y subtítulo
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/pideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1
          ref={titleRef}
          className="text-5xl font-bold text-center mb-4 text-yellow-500"
        >
          YieldWorks
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg text-center text-gray-300 mb-8"
        >
          Estamos trabajando en algo increíble. ¡Nos vemos pronto!
        </p>

        {/* Botón */}
        <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600">
          Notificarme
        </button>
      </div>
    </div>
  );
}
