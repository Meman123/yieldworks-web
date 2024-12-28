"use client"; // Indica que este es un Client Component

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComingSoon() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Animar el título
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );

    // Animar el subtítulo
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );

    // Animar el formulario
    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 1 }
    );
  }, []);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Título */}
      <h1
        ref={titleRef}
        className="text-5xl font-bold text-center mb-4 text-yellow-500"
      >
        YieldWorks
      </h1>

      {/* Subtítulo */}
      <p ref={subtitleRef} className="text-lg text-center text-gray-300 mb-8">
        Estamos trabajando en algo increíble. ¡Nos vemos pronto!
      </p>

      {/* Formulario */}
      <div ref={formRef} className="flex">
        <input
          type="email"
          placeholder="Ingresa tu correo"
          className="px-4 py-2 rounded-l-lg bg-gray-800 text-gray-300 focus:outline-none"
        />
        <button className="px-4 py-2 rounded-r-lg bg-yellow-500 text-gray-900 font-bold">
          Notificarme
        </button>
      </div>
    </div>
  );
}
