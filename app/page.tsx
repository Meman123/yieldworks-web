"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Draggable, ScrollTrigger, MotionPathPlugin, TextPlugin);

export default function AdvancedPage() {
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const draggableRef = useRef(null);

  useEffect(() => {
    // Animación de texto dinámico con TextPlugin
    gsap.to(textRef.current, {
      text: "¡Pronto estaremos contigo!",
      duration: 3,
      ease: "expoScale",
      repeat: -1,
      yoyo: true,
    });

    // Movimiento siguiendo un camino SVG con MotionPathPlugin
    gsap.to(circleRef.current, {
      motionPath: {
        path: [
          { x: 100, y: 0 },
          { x: 150, y: 100 },
          { x: 0, y: 200 },
          { x: -150, y: 100 },
          { x: 0, y: 0 },
        ],
        curviness: 1.5,
      },
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Activar ScrollTrigger para animaciones al desplazarse
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
      x: 200,
      rotation: 360,
      duration: 2,
    });

    // Draggable para permitir interacción con un elemento
    Draggable.create(draggableRef.current, {
      type: "x,y",
      bounds: ".draggable-container",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-10">
      {/* Título dinámico */}
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          <span ref={textRef}>YieldWorks</span>
        </h1>
        <p className="text-xl">Explorando todo el poder de GSAP</p>
      </div>

      {/* Contenedor para animaciones */}
      <div className="flex flex-col items-center mt-20 space-y-8">
        {/* Movimiento con MotionPath */}
        <div className="relative w-64 h-64">
          <div
            ref={circleRef}
            className="absolute w-10 h-10 bg-yellow-500 rounded-full"
          ></div>
        </div>

        {/* ScrollTrigger Box */}
        <div className="box bg-white text-black p-10 text-center font-bold rounded-md shadow-lg">
          Desplázate para activar la animación
        </div>
      </div>

      {/* Draggable */}
      <div className="draggable-container relative mt-20 w-full h-64 bg-white rounded-md shadow-lg">
        <div
          ref={draggableRef}
          className="absolute w-20 h-20 bg-blue-500 rounded-full"
        ></div>
      </div>
    </div>
  );
}
